
import './App.css'
import ContactBox from './components/ContactBox'
function App() {
 

  return (
    

    <div className="contacts">
      <ContactBox
      name="Mr. Whiskerson"
      imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStk3PKGsyvW3sV1EoPJvW301S5b9F1HuhYXw&s"
      phone="(212) 555-1234"
      email="mr.whiskaz@catnap.meow"
      />

      <ContactBox
      name="Fluffykins"
      imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTveFQQI22l-gRuN31AlBlm4Sc6faxH9zckiQ&s"
      phone="(212) 555-2345"
      email="fluff@me.com"
      />

      <ContactBox
      name="Destroyer"
      imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_QG04P3xKpRfcYbQBPfkgMbFzSZOtLSCl_w&s"
      phone="(212) 555-3456"
      email="ofworlds@yahoo.com"
      />

      <ContactBox
      name="Felix"
      imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSPiOzW9FrsHZuynFYNUZokIQgPtfFWGQuyw&s"
      phone="(212) 555-4567"
      email="thecat@hotmail.com"
      />
    </div>
  )
}

export default App
