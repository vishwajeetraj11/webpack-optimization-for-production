export function getMotivationalPictures() {
    return new Promise(resolve => {
        setTimeout(() => {
            const mockedResponse = [
                'images/tocopy/alreadyEnrolled.webp',
                'images/tocopy/paymenterror.webp',
                'images/tocopy/paymentsuccess.webp',
            ];
            resolve(mockedResponse);
        }, 700);
    })
}