export default theme => ({
    root: {
      position: 'relative',
        paddingTop: 0,
    },
    newsTitle: {
        color: '#263238',
        margin: '0 auto',
        marginBottom: 120,
    },
    newsWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'white',
    },
    progressLine: {
        width: '100%',
        zIndex: 9999,
        position: 'absolute',
        top: 3,
    },
    title: {
        width: '80%',
        background: 'rgba(178,235,242, 0.4)',
        fontSize: 25,
        margin: '50px auto 0px auto',
        padding: '10px 10px',
    },
    description: {
        width: '80%',
        fontSize: 18,
        margin: '0 auto',
        padding: '50px 10px',
    },
    images: {
        marginTop: 20,
        width: '100%',
    },
    authorPost: {
        color: '#607D8B',
        margin: '20px 0px 60px 5px',
        fontSize: 16,
    },
    line: {
        width: '100%',
        height: 1,
        background: '#607D8B',
        margin: '70px 0px 100px 0px',
    },
});