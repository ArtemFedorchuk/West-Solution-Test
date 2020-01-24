export default theme => ({
  root: {
    width: 520,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  card: {
    padding: theme.spacing(3),
    width: '100%',
  },
  title: {
    textAlign: 'center',
    fontWeight: 600,
    color: '#424242',
  },
  links: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  alignElement: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
  or: {
    color: '#757575',
  },
  signIn: {
    margin: theme.spacing(2, 0, 2),
    backgroundColor: '#039be5',
    '&:hover': {
      backgroundColor: '#088be0',
    },
  },
  submitFacebook: {
    backgroundColor: '#4267B2',
    color: 'white',
    margin: theme.spacing(0, 0, 3),
    '&:hover': {
      backgroundColor: '#0587c1',
    },
  },
  submitGoogle: {
    backgroundColor: '#DB4437',
    margin: theme.spacing(2, 0, 2),
    '&:hover': {
      backgroundColor: '#da2012',
    },
  },
  line: {
    width: '50%',
    margin: '0 auto',
    border: '1px solid #eeeeee',
  },
  activeLink: {
    color: '#1976D2',
  },
});
