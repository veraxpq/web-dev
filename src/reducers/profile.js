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
        case 'get-current-profile':
            return action.profile;
        case 'update-profile':
            return {
                ...state,
                name: action.profile.name,
                bio: action.profile.bio,
                location: action.profile.location,
                website: action.profile.website
            };
        case 'update-name':
            return {
                ...state,
                name: action.value
            }
        case 'update-bio':
            return {
                ...state,
                name: action.value
            }
        case 'update-location':
            return {
                ...state,
                name: action.value
            }
        case 'update-website':
            return {
                ...state,
                name: action.value
            }
        default:
            return state;
    }
}
export default profile;