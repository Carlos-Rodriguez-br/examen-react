const formatterCurrency= new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: process.env.REACT_APP_CURRENCY,
});  

const Utilities={
    formatterCurrency:formatterCurrency
}

export default Utilities;