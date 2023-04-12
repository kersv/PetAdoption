import { AdoptContainer, FilterContainer, PetGridContainer, PetGrid, PetCard, PetImage, PetTitle, PetDesc, TextContainer, ButtonContainer, DescriptionWrapper, PhotoMinus, PhotoPlus, Download, SearchInput, SelectAllButton, ClearAllButton, DownloadSelected, ImageContainer, SelectedContainer, RemoveSelected, Wrapper} from "../Components/AdoptContainer.styles"
import { useState, useEffect, useMemo } from "react"
import axios from 'axios';
import { saveAs } from 'file-saver';
// import { useDispatch, useSelector } from "react-redux"
// import { setPets} from '../Redux/animals';



const Adopt = () => {
  // const {pets} = useSelector((state) => state.pets)
  // const dispatch = useDispatch()
  
  
  const [pets, setPets] = useState([])
  const [searchField, setSearchField] = useState('')
  const [filteredPets, setFilteredPets] = useState(pets)
  const [selectedPets, setSelectedPets] = useState([])
  

  useEffect(() => {
    const fetchPets = async () => {
      try{
        const response = await axios.get('http://eulerity-hackathon.appspot.com/pets')
        // dispatch(setPets(response.data))
        setPets(response.data.map((pet, index) => ({...pet, id: index, isSelected: false})))
      } catch (error) {
        console.log(error)
      }
    }
    fetchPets()
  }, [])


  useEffect(() => {
    const newFilteredPets = pets.filter((pet) => {
      return pet.title.toLowerCase().includes(searchField) || pet.description.toLowerCase().includes(searchField)
    })
    // dispatch(setFilteredPets(newFilteredPets))
    setFilteredPets(newFilteredPets)
  }, [pets, searchField])

  
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    // dispatch(setSearchField(searchFieldString))
    setSearchField(searchFieldString)
    
  }

  const onSelect = (id) => {
    const updatePets = pets.map((pet) => {
      if(pet.id === id){
        const updatedPet = {...pet, isSelected: !pet.isSelected}
        if(updatedPet.isSelected){
          setSelectedPets((selectedPets) => [...selectedPets, updatedPet])
        }
        else{
          setSelectedPets((selectedPets) => selectedPets.filter((pet) => pet.id !== id))
        }
        return updatedPet
      }
      else{
        return pet
      }
    })
    setPets(updatePets)
    const updatedFilteredPets = filteredPets.map(pet => {
      if (pet.id === id) {
        return { ...pet, isSelected: false };
      }
      return pet;
    });
    setFilteredPets(updatedFilteredPets);
  }


  const onSelectAll = () => {
    const updatedPets = filteredPets.map((pet) => ({...pet, isSelected: true}))
    setFilteredPets(updatedPets)
    setPets(pets.map((pet) => {
      const found = updatedPets.find((updatedPet) => updatedPet.id === pet.id)
      if (found){
        return found
      }
      else{
        return pet
      }
    }))
    // adding any new selected pets thats not already in the selectedPets
    const newSelectedPets = updatedPets.filter((pet) => !selectedPets.find((selectedPet) => selectedPet.id === pet.id))
    setSelectedPets([...selectedPets, ...newSelectedPets])
    
    
  }
  
  const onClearAll = () => {
    const updatedPets = filteredPets.map((pet) => ({...pet, isSelected: false}))
    setFilteredPets(updatedPets)
    setPets(pets.map((pet) => {
      const found = updatedPets.find((updatedPet) => updatedPet.id === pet.id)
      if (found){
        return found
      }
      else{
        return pet
      }
    }))
    const removedPets = selectedPets.filter((pet) => !updatedPets.find((updatedpet) => updatedpet.id === pet.id))
    setSelectedPets(removedPets)
  }
  

  const handleDownload = async (url, name) => {
    const response = await fetch(url)
    const blob = await response.blob()
    saveAs(blob, name)
  }

  const groupDownload = (selected) => {
    console.log(selected)
    selected.map((pet) => {
      handleDownload(pet.url, pet.title)
      return null
    })
  }

  const memoSelectedPets = useMemo(() => selectedPets, [selectedPets])
  const memoFilteredPets = useMemo(() => filteredPets, [filteredPets])

  const removeSelected = (id) => {
    const index = selectedPets.findIndex(pet => pet.id === id);
    if (index !== -1) {
      const updatedSelectedPets = [...selectedPets];
      updatedSelectedPets.splice(index, 1);
      setSelectedPets(updatedSelectedPets);

      const updatedPets = pets.map(pet => {
        if (pet.id === id) {
          return { ...pet, isSelected: false };
        }
        return pet;
      });
      setPets(updatedPets);
      setFilteredPets(updatedPets);
    }
  }
  
  return (
    <AdoptContainer>
      {console.log(pets)}
      {console.log(selectedPets)}

      <FilterContainer>
        <SearchInput type='search' placeholder="Title or description" onChange={(event) => onSearchChange(event)}/>
        <DownloadSelected onClick={() => groupDownload(selectedPets)}>Download Images</DownloadSelected>
        <ButtonContainer marginBottom='.5em'>
          <SelectAllButton onClick={() => onSelectAll()}>Select All</SelectAllButton>
          <ClearAllButton onClick={() => onClearAll()}>Clear All</ClearAllButton>
        </ButtonContainer>
        <Wrapper>
          {memoSelectedPets.map((pet, id) => (
            <SelectedContainer>
              <PetTitle key={id} fontSize='.8em'  mobileDisplay='none' fontWeight='bold' >
              {pet.title}
              </PetTitle>
              <RemoveSelected onClick={() => removeSelected(pet.id)}></RemoveSelected>
            </SelectedContainer>
          ))}

        </Wrapper>
      </FilterContainer>

      <PetGridContainer>
        <PetGrid>
          {memoFilteredPets.map((pet, id) => (
            <PetCard key={id}>
              <ImageContainer>
                <PetImage src={pet.url} alt={pet.title} width='100%' height='367px' effect="blur"/>
              </ImageContainer>
              <DescriptionWrapper>
                <TextContainer>
                  <PetTitle textAlign='center' fontSize='1.3em' flex='1'>{pet.title}</PetTitle>
                  <PetDesc>{pet.description}</PetDesc>
                </TextContainer>
                <ButtonContainer width='30%'>
                  {pet.isSelected ? 
                  <PhotoMinus onClick={() => onSelect(pet.id)}/> 
                  : 
                  <PhotoPlus onClick={() => onSelect(pet.id)}/>}
                  <Download onClick={() => handleDownload(pet.url, pet.title)}/>
                </ButtonContainer>
              </DescriptionWrapper>
            </PetCard>
          ))}
        </PetGrid>
      </PetGridContainer>

    </AdoptContainer>
  )
}

export default Adopt
