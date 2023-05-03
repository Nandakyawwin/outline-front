import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class OutlineService {

  BASE_URL = 'http://134.209.111.189:3000/';

  // admin account start

  ADMINLOGIN_URL = this.BASE_URL + 'admin/login';
  ADMINREG_URL = this.BASE_URL + 'admin/register';
  ADMIN_ALL_URL = this.BASE_URL + 'admin/all';
  ADMIN_UPDATE_URL = this.BASE_URL + 'admin/update';
  ADMIN_DELETE_URL = this.BASE_URL + 'admin/delete';

  // admin account end

  // all servers start

  ALL_SERVER_URL = this.BASE_URL + 'admin/all/server';
  INFO_SERVER_URL = this.BASE_URL + 'admin/info';
  RENAME_SERVER_URL = this.BASE_URL + 'admin/rename/server';
  getDataUsage_URL = this.BASE_URL + 'admin/getDataUsage';
  setDefaultDataLimit_URL = this.BASE_URL + 'admin/setDefaultDataLimit';
  deleteDefaultDataLimit_URL = this.BASE_URL + 'admin/deleteDefaultDataLimit';
  setHostnameForAccessKeys_URL = this.BASE_URL + 'admin/setHostnameForAccessKeys';
  setPortForNewAccessKeys_URL = this.BASE_URL + 'admin/setPortForNewAccessKeys';
  getDataUserUsage_URL = this.BASE_URL + 'admin/getDataUserUsage';
  getShareMetrics_URL = this.BASE_URL + 'admin/getShareMetrics';
  setShareMetrics_URL = this.BASE_URL + 'admin/setShareMetrics';
  CREATE_SERVER_URL = this.BASE_URL + 'admin/create/server';
  UPDATE_SERVER_URL = this.BASE_URL + 'admin/update/server';
  PAGINATE_SERVER_URL = this.BASE_URL + 'admin/paginate/server/';
  DELETE_SERVER_URL = this.BASE_URL + 'admin/delete/server?serverid=';

  // Admin Server end

  // Admin Keys Start

  AllUser_URL = this.BASE_URL + 'admin/getUsers';
  getUser_URL = this.BASE_URL + 'admin/getUser';
  createUser_URL = this.BASE_URL + 'admin/createUser';
  deleteUser_URL = this.BASE_URL + 'admin/deleteUser';
  renameUser_URL = this.BASE_URL + 'admin/renameUser';
  addDataLimit_URL = this.BASE_URL + 'admin/addDataLimit';
  deleteDataLimit_URL = this.BASE_URL + 'admin/deleteDataLimit';
  disableUser_URL = this.BASE_URL + 'admin/disableUser';
  enableUser_URL = this.BASE_URL + 'admin/enableUser';
  ALL_KEYS_URL = this.BASE_URL + 'admin/all/keys';
  CREATE_KEY_URL = this.BASE_URL + 'admin/create/key';
  UPDATE_KEY_URL = this.BASE_URL + 'admin/update/key';
  PAGINATE_KEY_URL = this.BASE_URL + 'admin/paginate/key/';
  DELETE_KEY_URL = this.BASE_URL + 'admin/delete/key';
  find_URL = this.BASE_URL + 'admin/find';
  // localhost: 3000/admin/info / key
  INFO_KEY_URL = this.BASE_URL + 'admin/key';
  // Admin Keys end

  constructor(private http: HttpClient) {

  }

  // Admin Account Methods Start


  adminLogin(data: any) {
    return this.http.post(this.ADMINLOGIN_URL, data).pipe(
      map(
        (response: any) => response
      )
    )
  }

  adminRegister(data: any) {
    return this.http.post(this.ADMINREG_URL, data).pipe(
      map(
        (response: any) => response
      )
    )
  }

  adminAll() {
    return this.http.get(this.ADMIN_ALL_URL).pipe(
      map(
        (response: any) => response
      )
    )
  }
  adminDelete(data: any) {
    return this.http.post(this.ADMIN_DELETE_URL, data).pipe(
      map(
        (response: any) => response
      )
    )
  }
  // Admin Account Methods End


  // Admin Server Methods Start

  // ALL_SERVER_URL = this.BASE_URL + 'admin/all/server';

  getAllServer() {
    return this.http.get(this.ALL_SERVER_URL).pipe(
      map(
        (response: any) => response
      )
    )
  }
  // INFO_SERVER_URL = this.BASE_URL + 'admin/info/server';

  info(data: any) {
    const url = this.INFO_SERVER_URL + '/' + data;
    return this.http.get(url).pipe(
      map(
        (response: any) => response
      )
    )
  }

  // RENAME_SERVER_URL = this.BASE_URL + 'admin/rename/server';

  renameServer(data: any, name: any) {
    return this.http.post(this.RENAME_SERVER_URL, data, name).pipe(
      map(
        (response: any) => response
      )
    )
  }

  // getDataUsage_URL = this.BASE_URL + 'admin/getDataUsage';

  getDataUsage(data: any) {
    const url = this.getDataUsage_URL + '/' + data;
    return this.http.get(url).pipe(
      map(
        (response: any) => response
      )
    )
  }

  // setDefaultDataLimit_URL = this.BASE_URL + 'admin/setDefaultDataLimit';

  setDefaultDataLimit(data: any, bytes: any) {
    return this.http.post(this.setDefaultDataLimit_URL, data, bytes).pipe(
      map(
        (response: any) => response
      )
    )
  }

  // deleteDefaultDataLimit_URL = this.BASE_URL + 'admin/deleteDefaultDataLimit';

  deleteDefaultDataLimit(data: any) {
    return this.http.post(this.deleteDefaultDataLimit_URL, data).pipe(
      map(
        (response: any) => response
      )
    )
  }

  // setHostnameForAccessKeys_URL = this.BASE_URL + 'admin/setHostnameForAccessKeys';

  setHostnameForAccessKeys(data: any) {
    return this.http.post(this.setHostnameForAccessKeys_URL, data).pipe(
      map(
        (response: any) => response
      )
    )
  }

  // setPortForNewAccessKeys_URL = this.BASE_URL + 'admin/setPortForNewAccessKeys';

  setPortForNewAccessKeys(data: any) {
    return this.http.post(this.setPortForNewAccessKeys_URL, data).pipe(
      map(
        (response: any) => response
      )
    )
  }

  // getDataUserUsage_URL = this.BASE_URL + 'admin/getDataUserUsage';

  getDataUserUsage(data: any) {
    return this.http.post(this.getDataUserUsage_URL, data).pipe(
      map(
        (response: any) => response
      )
    )
  }

  // getShareMetrics_URL = this.BASE_URL + 'admin/getShareMetrics';

  getShareMetrics(data: any) {
    return this.http.post(this.getShareMetrics_URL, data).pipe(
      map(
        (response: any) => response
      )
    )
  }

  // setShareMetrics_URL = this.BASE_URL + 'admin/setShareMetrics';

  setShareMetrics(data: any) {
    return this.http.post(this.setShareMetrics_URL, data).pipe(
      map(
        (response: any) => response
      )
    )
  }

  // CREATE_SERVER_URL = this.BASE_URL + 'admin/create/server';

  createServer(data: any) {
    return this.http.post(this.CREATE_SERVER_URL, data).pipe(
      map(
        (response: any) => response
      )
    )
  }

  // UPDATE_SERVER_URL = this.BASE_URL + 'admin/update/server';

  updateServer(data: any) {
    return this.http.post(this.UPDATE_SERVER_URL, data).pipe(
      map(
        (response: any) => response
      )
    )
  }

  // PAGINATE_SERVER_URL = this.BASE_URL + 'admin/paginate/server/';

  paginateServer(start: any, count: any) {
    const url = this.PAGINATE_SERVER_URL + start + '/' + count;
    return this.http.get(url).pipe(
      map(
        (response: any) => response
      )
    )
  }

  // DELETE_SERVER_URL = this.BASE_URL + 'admin/delete/server';

  deleteServer(data: any) {
    const url = this.DELETE_SERVER_URL + data;
    return this.http.post(url,{}).pipe(
      map(
        (response: any) => response
      )
    )
  }

  // Admin Server Methods End

  // Admin Keys Methods Start

  // AllUser_URL = this.BASE_URL + 'admin/getUsers';

  // allUser(data: any) {
  //   return this.http.post(this.AllUser_URL, data).pipe(
  //     map(
  //       (response: any) => response
  //     )
  //   )
  // }
  allUser(data: any) {
    const url = this.AllUser_URL + '/' + data;
    return this.http.get(url).pipe(
      map(
        (response: any) => response
      )
    )
  }

  // getUser_URL = this.BASE_URL + 'admin/getUser';


  getUser(data: any, id: any) {
    const url = this.getUser_URL + '/' + data;
    return this.http.post(url, id).pipe(
      map(
        (response: any) => response
      )
    )
  }
  // createUser_URL = this.BASE_URL + 'admin/createUser';

  createUser(data: any) {
    return this.http.post(this.createUser_URL, data).pipe(
      map(
        (response: any) => response
      )
    )
  }

  // deleteUser_URL = this.BASE_URL + 'admin/deleteUser';

  deleteUser(data: any, id: any) {
    return this.http.post(this.deleteUser_URL, data, id).pipe(
      map(
        (response: any) => response
      )
    )
  }

  // renameUser_URL = this.BASE_URL + 'admin/renameUser';

  renameUser(data: any, name: any) {
    return this.http.post(this.renameUser_URL, data, name).pipe(
      map(
        (response: any) => response
      )
    )
  }

  // addDataLimit_URL = this.BASE_URL + 'admin/addDataLimit';

  addDataLimit(data: any, bytes: any) {
    return this.http.post(this.addDataLimit_URL, data, bytes).pipe(
      map(
        (response: any) => response
      )
    )
  }

  // deleteDataLimit_URL = this.BASE_URL + 'admin/deleteDataLimit';

  deleteDataLimit(data: any) {
    return this.http.post(this.deleteDataLimit_URL, data).pipe(
      map(
        (response: any) => response
      )
    )
  }

  // disableUser_URL = this.BASE_URL + 'admin/disableUser';

  disableUser(data: any, id: any) {
    return this.http.post(this.disableUser_URL, data, id).pipe(
      map(
        (response: any) => response
      )
    )
  }

  // enableUser_URL = this.BASE_URL + 'admin/enableUser';

  enableUser(data: any, id: any) {
    return this.http.post(this.enableUser_URL, data, id).pipe(
      map(
        (response: any) => response
      )
    )
  }

  // ALL_KEYS_URL = this.BASE_URL + 'admin/all/keys';

  allKeys() {
    return this.http.get(this.ALL_KEYS_URL).pipe(
      map(
        (response: any) => response
      )
    )
  }

  // info key or search key

  infoKey(key: any) {
    return this.http.post(this.INFO_KEY_URL, key).pipe(
      map(
        (response: any) => response
      )
    )
  }

  // CREATE_KEY_URL = this.BASE_URL + 'admin/create/key';

  createKey(data: any) {
    return this.http.post(this.CREATE_KEY_URL, data).pipe(
      map(
        (response: any) => response
      )
    )
  }

  // UPDATE_KEY_URL = this.BASE_URL + 'admin/update/key';

  updateKey(data: any) {
    return this.http.post(this.UPDATE_KEY_URL, data).pipe(
      map(
        (response: any) => response
      )
    )
  }

  // PAGINATE_KEY_URL = this.BASE_URL + 'admin/paginate/key/';

  paginateKey(start: any, count: any) {
    const url = this.PAGINATE_KEY_URL + start + '/' + count;
    return this.http.get(url).pipe(
      map(
        (response: any) => response
      )
    )
  }

  // DELETE_KEY_URL = this.BASE_URL + 'admin/delete/key';

  deleteKey(data: any) {
    return this.http.post(this.DELETE_KEY_URL, data).pipe(
      map(
        (response: any) => response
      )
    )
  }

  // Admin Keys Methods End


}
