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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  forgotPassword: {
    margin: theme.spacing(2, 0, 2),
    backgroundColor: '#039be5',
    '&:hover': {
      backgroundColor: '#088be0',
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
