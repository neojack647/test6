import { Injectable } from '@angular/core';
import { LoadingMode, LoadingType, TdLoadingService  } from '@covalent/core/loading';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(
    private loadingService: TdLoadingService
    ) { 
    this.loadingService.create({
      name: 'circular-loader',
      mode: LoadingMode.Indeterminate,
      type: LoadingType.Circular,
      color: 'accent',
    });

    this.loadingService.create({
      name: 'linear-loader',
      mode: LoadingMode.Indeterminate,
      type: LoadingType.Linear,
      color: 'accent',
    });

    this.loadingService.create({
      name: 'linear-loader-error',
      mode: LoadingMode.Indeterminate,
      type: LoadingType.Linear,
      color: 'warn',
    });

    this.loadingService.create({
      name: 'linear-progress-loader',
      mode: LoadingMode.Determinate,
      type: LoadingType.Linear,
      color: 'accent'
    });
  }

  showLoader(): void {
    this.loadingService.register('linear-loader');
  }
  hideLoader(): void {
    this.loadingService.resolve('linear-loader'); // or // this.loadingService.resolveAll('circular-loader');
  }
  errorLoader(): void {
    this.loadingService.register('linear-loader-error');
  }
  progressLoader(): void {
    this.loadingService.register('linear-progress-loader');
  }
  changeProgress(value: number): void {
    this.loadingService.setValue('linear-progress-loader', value);
  }
  hideProgressLoader(): void {
    this.loadingService.resolveAll('linear-progress-loader');
  }
  resolveAllLoading(): void {
    this.loadingService.resolveAll('linear-loader');
  }
  resolveAllError(): void {
    this.loadingService.resolveAll('linear-loader-error');
  }

}
