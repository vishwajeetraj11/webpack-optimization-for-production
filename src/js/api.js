export function getMotivationalPictures() {
    return new Promise(resolve => {
        setTimeout(() => {
            const mockedResponse = [
                'images/tocopy/alreadyEnrolled.png',
                'images/tocopy/paymenterror.png',
                'images/tocopy/paymentsuccess.png',
            ];
            resolve(mockedResponse);
        }, 700);
    })
}