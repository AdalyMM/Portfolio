import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagePreloadService {
  private activeRequests: Map<string, Promise<void>> = new Map();

  constructor(private http: HttpClient) { }

  preloadImages(urls: string[]): Promise<void[]> {
    const preloadPromises: Promise<void>[] = [];

    urls.forEach((url) => {
      const promise = this.http
        .get(url, { responseType: 'blob' })
        .toPromise()
        .then(() => {
          
        })
        .catch((error) => {
          console.error('Error al precargar la imagen:', url, error);
        });

      preloadPromises.push(promise);
    });

    return Promise.all(preloadPromises);
  }

  cancelPreload(url: string): void {
    const activeRequest = this.activeRequests.get(url);
    if (activeRequest) {
      this.activeRequests.delete(url);
    }
  }
}
