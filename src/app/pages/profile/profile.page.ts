import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { CustomerService } from 'src/app/services/customer.service';
import { StorageService } from 'src/app/services/storage.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit{
  userName: string;
  userEmail: string;
  userAddresse: string;
  userImage: string;

  platformReady: Boolean = false;

  croppedImagepath = "";
  isLoading = false;
  showCard = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };

  constructor(
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private file: File,
    private crop: Crop,
    private customerService: CustomerService,
    private storageService: StorageService,
    private platform: Platform
  ) { }

    
  ngOnInit(){
    this.userName = this.customerService.getCustomerName();
    this.userEmail = this.customerService.getCustomerEmail();
    this.userAddresse = this.customerService.getCustomerAddress();
    this.userImage = this.customerService.getCustomerImage();
    //this.storageService.setObject("user", this.userName, this.userImage); 
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({ 
      // action sheet controller is a dialog that lets the user choose from a set of options.
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => { this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY); }
      },
      {
        text: 'Use Camera',
        handler: () => { this.pickImage(this.camera.PictureSourceType.CAMERA); }
      },
      {
        text: 'Cancel', role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

  
  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.cropImage(imageData)
      console.log(imageData)
    }, (err) => {
      // Handle error
      console.log(err)
    });
  }

  cropImage(fileUrl) {
    this.crop.crop(fileUrl, {quality: 50 })
    .then(
      newPath => {
        this.showCroppedImage(newPath.split('?')[0])
      },
      error => {
        alert('Error cropping image' + error);
      }
    )
  }

  showCroppedImage(ImagePath) {
    this.isLoading = true;
    var copyPath = ImagePath;
    var splitPath = copyPath.split('/');
    var imageName = splitPath[splitPath.length - 1];
    var filePath = ImagePath.split(imageName)[0];

    this.file.readAsDataURL(filePath, imageName).then(img => {
      this.croppedImagepath = img;
      this.isLoading = false;
      this.updateProfilePhoto(this.croppedImagepath);
    }, error => {
      alert('Error in showing image' + error);
      console.log('Error in showing image' + error);
      this.isLoading = false;
    });
  }

  updateProfilePhoto(image){
    this.customerService.updateProfilePhoto(image);
    this.userImage = this.customerService.getCustomerImage();
  }

  showDetails() {
    this.showCard = true;
  }

}
