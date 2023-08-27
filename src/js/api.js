export function getMotivationalPictures() {
    return new Promise(resolve => {
        setTimeout(() => {
            const mockedResponse = [
                '/static/images/tocopy/alreadyEnrolled.webp',
                '/static/images/tocopy/paymenterror.webp',
                '/static/images/tocopy/paymentsuccess.webp',
            ];
            resolve(mockedResponse);
        }, 700);
    })
}