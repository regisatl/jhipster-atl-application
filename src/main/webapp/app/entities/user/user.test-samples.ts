import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 19554,
  login: 'UK@HP\\NT',
};

export const sampleWithPartialData: IUser = {
  id: 15485,
  login: 'b3URM@eLB\\u7Vap-\\BMIP1QX\\$Q',
};

export const sampleWithFullData: IUser = {
  id: 17200,
  login: 'abr^!&@ffPp',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
