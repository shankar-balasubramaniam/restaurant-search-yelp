import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer sGb2oI3S0Jn1WW8Wt_1AOIdsh8CMr3XL7J2AewxJw9u3VqxfoOm6ZwGsadzVi-GBXzTxYGH74mnAfbthZHQbdSHFvYEgs_SFtkvXJ91FG4mIejNrF1Ak16Y65VhqYXYx',
  },
});
