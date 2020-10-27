import { Injectable } from '@angular/core';

// import { Plugins } from '@capacitor/core';

// const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  // async setObject(key: string, userFName: string, userLName: string, userEmail: string, userAdd: string, userImg: string ): Promise<void> {
  //   await Storage.set({
  //     key: key,
  //     value: JSON.stringify({
  //       firstName: userFName,
  //       lastName: userLName,
  //       email: userEmail,
  //       addresse: userAdd,
  //       image: userImg
  //     })
  //   });
  // }

  // async getObject(info: string): Promise<{ value: any }> {
  //   const ret = await Storage.get({ key: 'user' });
  //   const user = JSON.parse(ret.value);
  //   console.log(user[info]);
  //   return user[info]; // type is the varable ex: user.image
  // }

}

