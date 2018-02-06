import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

@IonicPage()
@Component({
  selector: 'page-lapor',
  templateUrl: 'lapor.html',
})
export class LaporPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
    private transfer: FileTransfer,
    private file: File) {
  }

  fotoArray:any = [];
  uploadedFotoArray:any = [];
  severityText:any = function() {
    if(this.laporan.severity==1) {
      return 'ringan';
    } else if(this.laporan.severity==2) {
      return 'sedang';
    } else if(this.laporan.severity==3) {
      return 'berat';
    } else if(this.laporan.severity==4) {
      return 'parah';
    }
  };
  pukul:any = function() {
    let date = new Date();
    let jam = date.getHours().toString();
    let menit = date.getMinutes().toString();
    if(menit.length>2) {
      menit = '0'+menit;
    }
    return parseInt(jam+menit);
  }

  laporan:any = {
    lat: this.navParams.get('lat'),
    lng: this.navParams.get('lng'),
    insiden: 'kebakaran',
    severity: 1,
    keterangan: '',
    foto: [],
    sumber: 'pengguna',
    orientasi: 0,
    tanggal: Date.now(),
    pukul: this.pukul()
  }

  ionViewDidLoad() {
    console.log('loaded');
  }

  ambilFoto() {
    const options: CameraOptions = {
      quality: 75,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((img) => {
      this.fotoArray.push(img);
      this.uploadFoto(img);
    }, (err) => {
      console.log(err);
    });
  }

  uploadFoto(foto) {
    const fileTransfer: FileTransferObject = this.transfer.create();
    const apiUrl = '192.168.43.47:8081/api/unggah/single'
    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: Date.now()+'.jpg'
    }

    fileTransfer.upload(foto, apiUrl, options)
    .then((data) => {
      console.log(data)
    }, (err) => {
      console.log(err)
    })
  }

  test() {
    console.log(this.laporan);
  }
}
