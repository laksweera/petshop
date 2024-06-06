
// Static component
// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import dogFood from '../../images/4.png';
// import catFood from '../../images/5.png';
// import birdFood from '../../images/6.png';
// import fishFood from '../../images/7.png';
// import '../../Styles/foods.css';

// const foods = () => {
//   return (
//     <Container className="foods-section">
//       <Row>
//         <Col>
//           <Card className="food-card">
//             <Card.Img variant="top" src={dogFood} alt="Dogs Foods" />
//             <Card.Body>
//               <Card.Title>Dogs Foods</Card.Title>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col>
//           <Card className="food-card">
//             <Card.Img variant="top" src={catFood} alt="Cats Foods" />
//             <Card.Body>
//               <Card.Title>Cats Foods</Card.Title>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col>
//           <Card className="food-card">
//             <Card.Img variant="top" src={birdFood} alt="Birds Foods" />
//             <Card.Body>
//               <Card.Title>Birds Foods</Card.Title>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col>
//           <Card className="food-card">
//             <Card.Img variant="top" src={fishFood} alt="Fish Foods" />
//             <Card.Body>
//               <Card.Title className="card-text">Fish Foods</Card.Title>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default foods;
// Static component end










// Dynamic component1
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Foods = () => {
  const [foods, setFoodList] = useState([]);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setFoodList(data.data.foods);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData('/api/foods');
  }, []);

  const dogFood = "path_to_dog_food_image"; 

  return (
    <Container className="foods-section">
      <Row>
        <Col>
          {foods.length > 0 && foods.map((any, idx) => (
            <div className="col" key={idx}>
              <div>
                <Card.Img variant="top" src={dogFood} alt="Dogs Foods" />
                <Card.Body>
                  <Card.Title>{any.title}</Card.Title>
                </Card.Body>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Foods;
// Dynamic component1 end


// Dynamic component 2 

// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import dogFood from '../../images/4.png';
// import catFood from '../../images/5.png';
// import birdFood from '../../images/6.png';
// import fishFood from '../../images/7.png';
// import '../../Styles/foods.css';

// const foods = () => {
//   // Define an array of food objects
//   const foodData = [
//     { title: "Dog Food", image: dogFood },
//     { title: "Cat Food", image: catFood },
//     { title: "Bird Food", image: birdFood },
//     { title: "Fish Food", image: fishFood }
//   ];

//   return (
//     <Container className="foods-section">
//       <Row>
//         {foodData.map((food, idx) => (
//           <Col key={idx}>
//             <div className="col">
//               <div>
//                 <Card.Img variant="top" src={food.image} alt={food.title} />
//                 <Card.Body>
//                   <Card.Title>{food.title}</Card.Title>
//                 </Card.Body>
//               </div>
//             </div>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default foods;

// Dynamic component 2 end

