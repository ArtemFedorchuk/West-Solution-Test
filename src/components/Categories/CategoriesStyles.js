export default theme => ({
    addButton: {
        margin: 0,
    },
    content: {
        width: '100%',
        paddingLeft: 266,
        paddingRight: 330,
        transition: theme.transitions.create(['padding', 'margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
});