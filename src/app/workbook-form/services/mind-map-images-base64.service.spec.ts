import { TestBed } from '@angular/core/testing';

import { MindMapImagesBase64Service } from './mind-map-images-base64.service';

describe('MindMapImagesBase64Service', () => {
  let service: MindMapImagesBase64Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MindMapImagesBase64Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
