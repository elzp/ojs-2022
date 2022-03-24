async function fetchProfile(userId) {
    const res = await fetch(`http://localhost:8080/app/profile/${userId}`);
    return res.json();
}

async function fetchPaymentDetails(userId) {
   const res = await fetch(`http://localhost:8080/app/payments/${userId}`);
   return res.json();
}

let userProfile = null
let userId = 4

fetchProfile(userId, (profile) => {
    userProfile = profile
}, () => {
    window.alert('Cannot fetch profile!')
})

try{
 (async ()=>{

    const [userProfile, payments] = await Promise.all([fetchProfile(userId),
    fetchPaymentDetails(userId)]) //returns values when all promoses are resolved.


    document.querySelector('#user-name').textContent = `User: ${userProfile.firstName} ${userProfile.lastName}`
    document.querySelector('#user-subscription').textContent = `Subscription: ${payments.subscriptionStatus}`
    })()}
    catch{
    window.alert('Cannot fetch payment details!')
    }