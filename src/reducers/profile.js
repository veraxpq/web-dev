const profileData = {
    name: 'Qing Peng',
    handle: 'sherry',
    profilePicture: '../../../images/pq.jpg',
    bannerPicture: '../../../images/polyglot.png',
    bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retweets and likes are not endorsements.',
    website: 'youtube.com/webdevtv',
    location: 'San Francisco, CA',
    dateOfBirth: 'September 24, 1995',
    dateJoined: 'October 1, 2021',
    followingCount: 312,
    followersCount: 180,
    tweetCount: 5196,
}
const profile = (state = profileData, action) => {
    switch (action.type) {
        case 'update-profile':
            return {
                ...state,
                name: action.payload.name,
                bio: action.payload.bio,
                location: action.payload.location,
                website: action.payload.website
            }
            break;
        default:
            return state;
    }
}
export default profile;