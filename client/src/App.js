import { useState } from 'react';
import './App.css';
import data from './test2.json'





function App() {

  const [content, setContent] = useState("")
  const [review, setReview] = useState([])
  const [polarity, setPolarity] = useState([])

//   const dispatchInfo = (aspect) => {
//     const p = document.getElementById('rev');
//   data.map(d => {
//     if(d.Aspect === aspect){
//       return (
//         <div>
//           <p></p>
//         </div>
//       )
//     }
//   })
// }


// speed comfort mileage safety reliable attractive transmission

  return (
    <div style={{padding:"1rem", backgroundColor:"#050033"}} className="App">
        <button style={{marginRight:"1rem", padding:".5rem"}} onClick={() => {
          var reviews = []
          let positive=0;
          let negetive=0;
          data.map(d => {
            if(d.Aspect === 'speed'){
              reviews.push({'review':d.Review,'polarity':d.Label})
              if(d.Label === 'pos'){
                positive = positive + 1;
              }
              if(d.Label === 'neg'){
                negetive = negetive + 1;
              }
            }
          })

          setReview(reviews)

          setContent(`Speed :: positive = ${positive} , negetive = ${negetive}`)
        }} >speed</button>
        <button style={{marginRight:"1rem", padding:".5rem"}} onClick={() => {
          var reviews = []
          let positive=0;
          let negetive=0;
          data.map(d => {
            if(d.Aspect === 'comfort'){
              reviews.push({'review':d.Review,'polarity':d.Label})
              if(d.Label === 'pos'){
                positive = positive + 1;
              }
              if(d.Label === 'neg'){
                negetive = negetive + 1;
              }
            }
          })

          setReview(reviews)

          setContent(`comfort :: positive = ${positive} , negetive = ${negetive}`)
        }} >comfort</button>
        <button style={{marginRight:"1rem", padding:".5rem"}} onClick={() => {
          var reviews = []
          let positive=0;
          let negetive=0;
          data.map(d => {
            if(d.Aspect === 'mileage'){
              reviews.push({'review':d.Review,'polarity':d.Label})
              if(d.Label === 'pos'){
                positive = positive + 1;
              }
              if(d.Label === 'neg'){
                negetive = negetive + 1;
              }
            }
          })

          setReview(reviews)

          setContent(`mileage :: positive = ${positive} , negetive = ${negetive}`)
        }} >mileage</button>
        <button style={{marginRight:"1rem", padding:".5rem"}} onClick={() => {
          var reviews = []
          let positive=0;
          let negetive=0;
          data.map(d => {
            if(d.Aspect === 'transmission'){
              reviews.push({'review':d.Review,'polarity':d.Label})
              if(d.Label === 'pos'){
                positive = positive + 1;
              }
              if(d.Label === 'neg'){
                negetive = negetive + 1;
              }
            }
          })

          setReview(reviews)

          setContent(`transmission :: positive = ${positive} , negetive = ${negetive}`)
        }} >transmission</button>
        <button style={{marginRight:"1rem", padding:".5rem"}} onClick={() => {
          var reviews = []
          let positive=0;
          let negetive=0;
          data.map(d => {
            if(d.Aspect === 'safety'){
              reviews.push({'review':d.Review,'polarity':d.Label})
              if(d.Label === 'pos'){
                positive = positive + 1;
              }
              if(d.Label === 'neg'){
                negetive = negetive + 1;
              }
            }
          })

          setReview(reviews)

          setContent(`safety :: positive = ${positive} , negetive = ${negetive}`)
        }} >safety</button>
        <button style={{marginRight:"1rem", padding:".5rem"}} onClick={() => {
          var reviews = []
          let positive=0;
          let negetive=0;
          data.map(d => {
            if(d.Aspect === 'reliable'){
              reviews.push({'review':d.Review,'polarity':d.Label})
              if(d.Label === 'pos'){
                positive = positive + 1;
              }
              if(d.Label === 'neg'){
                negetive = negetive + 1;
              }
            }
          })

          setReview(reviews)

          setContent(`reliable :: positive = ${positive} , negetive = ${negetive}`)
        }} >reliable</button>
        <button style={{marginRight:"1rem", padding:".5rem"}} onClick={() => {
          var reviews = []
          let positive=0;
          let negetive=0;
          data.map(d => {
            if(d.Aspect === 'attractive'){
              reviews.push({'review':d.Review,'polarity':d.Label})
              if(d.Label === 'pos'){
                positive = positive + 1;
              }
              if(d.Label === 'neg'){
                negetive = negetive + 1;
              }
            }
          })

          setReview(reviews)

          setContent(`attractive :: positive = ${positive} , negetive = ${negetive}`)
        }} >attractive</button>
        <button style={{marginRight:"1rem", padding:".5rem"}} onClick={() => {
          var reviews = []
          let positive=0;
          let negetive=0;
          data.map(d => {
            if(d.Aspect === 'price'){
              reviews.push({'review':d.Review,'polarity':d.Label})
              if(d.Label === 'pos'){
                positive = positive + 1;
              }
              if(d.Label === 'neg'){
                negetive = negetive + 1;
              }
            }
          })

          setReview(reviews)

          setContent(`price :: positive = ${positive} , negetive = ${negetive}`)
        }} >price</button>
        <button style={{marginRight:"1rem", padding:".5rem"}} onClick={() => {
          var reviews = []
          let positive=0;
          let negetive=0;
          data.map(d => {
            if(d.Aspect === 'accessories'){
              reviews.push({'review':d.Review,'polarity':d.Label})
              if(d.Label === 'pos'){
                positive = positive + 1;
              }
              if(d.Label === 'neg'){
                negetive = negetive + 1;
              }
            }
          })

          setReview(reviews)

          setContent(`accessories :: positive = ${positive} , negetive = ${negetive}`)
        }} >accessories</button>
        <button style={{marginRight:"1rem", padding:".5rem"}} onClick={() => {
          var reviews = []
          let positive=0;
          let negetive=0;
          data.map(d => {
            if(d.Aspect === 'colour'){
              reviews.push({'review':d.Review,'polarity':d.Label})
              if(d.Label === 'pos'){
                positive = positive + 1;
              }
              if(d.Label === 'neg'){
                negetive = negetive + 1;
              }
            }
          })

          setReview(reviews)

          setContent(`colour :: positive = ${positive} , negetive = ${negetive}`)
        }} >colour</button>
        <button style={{marginRight:"1rem", padding:".5rem"}} onClick={() => {
          var reviews = []
          let positive=0;
          let negetive=0;
          data.map(d => {
            if(d.Aspect === 'efficient'){
              reviews.push({'review':d.Review,'polarity':d.Label})
              if(d.Label === 'pos'){
                positive = positive + 1;
              }
              if(d.Label === 'neg'){
                negetive = negetive + 1;
              }
            }
          })

          setReview(reviews)

          setContent(`efficient :: positive = ${positive} , negetive = ${negetive}`)
        }} >efficient</button>
        
        <p style={{color:"white"}} id='rev'>{content}</p>

        <div>
          
          {
              review.map((r) => {

                if(r.polarity === 'pos'){
                  return(
                    <div style={{backgroundColor:"#34eb7a",marginTop:"1rem", padding:"1rem", borderRadius:"10px"}}>
                      <p>{r.review}</p><br />
                    </div>
                  )
                }
                if(r.polarity === 'neg'){
                  return(

                    <div style={{backgroundColor:"#f24444", color:"white",marginTop:"1rem", padding:"1rem", borderRadius:"10px"}}>
                      <p>{r.review}</p><br />
                      {/* <p>{r.polarity}</p><br /> */}
                    </div>

                  )
                }
                
              })
          }

        </div>
    </div>
  );
}

export default App;
