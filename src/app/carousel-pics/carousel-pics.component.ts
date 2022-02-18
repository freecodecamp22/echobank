import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ImageService } from 'src/app/services/image.service';
import { Images } from './../models/images.model';
import { Image } from '../models/image.model';

@Component({
  selector: 'app-carousel-pics',
  templateUrl: './carousel-pics.component.html',
  styleUrls: ['./carousel-pics.component.css'],
})
export class CarouselPicsComponent implements OnInit {
  showNavigationArrows = false;
  showModal: boolean = false;
  showNavigationIndicators = false;
  images: Array<Image> = [];
  chunkedData: Array<Array<Image>> = [];
  lkupImages = [1, 2, 3].map((n) => `https://reqres.in/api/users?page=${n}`);

  constructor(
    private config: NgbCarouselConfig,
    private imageService: ImageService
  ) {
    // customize default values of carousels used by this component tree
    this.config.interval = 10000;
    this.config.wrap = false;
    this.config.keyboard = false;
    this.config.pauseOnHover = false;
    this.config.showNavigationArrows = true;
    this.config.showNavigationIndicators = true;
    this.initImages(imageService);
  }

  initImages(imageService: ImageService): void {
    [1, 2, 3].map((n) => {
      imageService.get(n).subscribe(
        (response) => {
          console.log(response);
          const obj: Images = response;
          obj.data?.map((i: Image) => {
            this.images.push(i);
          });
        },
        (error) => {
          console.log(error);
        }
      );
    });
    console.log(this.chunkedData);
  }
  ngOnInit(): void {
    console.log(this.images);
    if (this.images.length > 0) {
      console.log('*******'+this.images.length)
      for (let i = 0; i < 3; i = i + 4) {
        this.chunkedData.push(this.images.slice(i, i + 4));
      }
    }
    console.log(this.chunkedData);
  }
  showImageDetails(img: Image): void {
    console.log('showImageDetails: ',img);
    this.showModal = true;
  }



}
