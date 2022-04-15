/*
Copyright 2022 bcgov/biohubbc

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { ensureProtocol } from '../../../utils/Utils';

export class APIError extends Error {
  status: number;
  errors?: (string | object)[];
  requestURL?: string;

  constructor(error: AxiosError) {
    super(error.response?.data?.message || error.message);
    this.name = error.response?.data?.name || error.name;
    this.status = error.response?.data?.status || error.response?.status;
    this.errors = error.response?.data?.errors || [];
    this.requestURL = `${error?.config?.baseURL}${error?.config?.url}`;
  }
}

/**
 * Returns an instance of axios with baseURL and authorization headers set.
 *
 * @return {*} {AxiosInstance} an instance of axios
 */
const useAxios = (baseUrl?: string): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseUrl && ensureProtocol(baseUrl)
  });

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      return Promise.reject(new APIError(error));
    }
  );

  return instance;
};

export default useAxios;
