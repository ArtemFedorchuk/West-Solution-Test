import React from "react";
import {
  Column,
  Container,
  Row
} from "../index";
import profilePhoto from '../../assets/images/profile-photo.jpg';

import ProfileStyles from "./ProfileStyles";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(ProfileStyles);

const Profile = () => {
  const classes = useStyles();

  return(
        <div className={classes.root}>
           <Container  component="main">
             <Row>
               <Column style={{margin: 'auto',}}>
                 <img src={profilePhoto} alt="profilePhoto" className={classes.imageProfile}/>
               </Column>
             </Row>
             <Row className={classes.alignContent}>
               <Column>
                 <>
                  <div className={classes.titleInformation}>
                    <h3>Fedorchuk Artem</h3>
                    <p>Junior JavaScript(React) developer</p>
                  </div>
                   <div>
                     <h4>Контактная информация:</h4>
                     <p>Тел. (моб.): +38 (050) 77 29 006, +38 (063) 51 46 051</p>
                     <p>E-mail: fedorchuk.zver@gmail.com</p>
                     <p>GitHub: https://github.com/ArtemFedorchuk</p>
                     <p>Site: https://beggarly-event.000webhostapp.com</p>
                     <p>Facebook: https://www.facebook.com/fedorchuk.zver</p>
                     <p>Freelance: https://freelance.ru/fedorchukartem</p>
                     <p>Skype: zver.ofc</p>
                   </div>
                   <>
                     <h4>Skils:</h4>
                      <div>
                        <p>HTML, CSS. (Продвинутый уровень)</p>
                        <p>Кроссбраузерная верстка (IE 9+, Firefox, Opera, Chrome, Safari OS X) (Продвинутый).</p>
                        <p>Responsive, adaptive (Продвинутый).</p>
                        <p>Avocode, Photoshop (Средний).</p>
                        <p>Сms Wordpress, на уровне интеграции landing page, или другого сверстанного макета .</p>
                        <p>JavaScript (ES5, ES6/ES2015) (Выше начального - знаю как сделать гамбургер, слайдер и другие фишки).</p>
                        <p>React (Junior).</p>
                        <p>React Material UI</p>
                        <p>GIT (Командная работа над проектом).</p>
                        <p>Gitkraken</p>
                        <p>Оптимизация согласно Google PageSpeed.</p>
                        <p>PerfectPixel</p>
                      </div>
                   </>
                 </>
               </Column>
             </Row>
           </Container>
        </div>
    )
};

export default Profile;
