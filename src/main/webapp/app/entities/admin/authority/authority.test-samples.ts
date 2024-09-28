import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '9001ad7c-b1ba-4f31-bb83-605e75448d58',
};

export const sampleWithPartialData: IAuthority = {
  name: 'ace11a5f-f7e4-4c54-9e23-9a125bd0c9a4',
};

export const sampleWithFullData: IAuthority = {
  name: '8ef5a2b3-62f2-4365-888f-f3fa02b78939',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
