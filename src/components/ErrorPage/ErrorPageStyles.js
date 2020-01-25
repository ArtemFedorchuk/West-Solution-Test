import errorImage from '../../assets/images/error.png'

 export default theme => ({
     error: {
         margin: '0 auto',
        width: '100%',
        height: '100vh',
        backgroundImage: `url("${errorImage}")`,
        backgroundRepeat: 'no-repeat',
    },
 });