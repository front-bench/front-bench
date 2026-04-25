export default interface Spec {
  slug: string;
  name: string;
  weight: number;
  type?: 'feature' | 'bundle-size' | 'performance';
  /**
   * For 'bundle-size' type, the value is in bytes. Benchmark score is 1 if the value is equal or less than the minimum.
   * For 'performance' type, the value is in milliseconds. Benchmark score is 1 if the value is equal or less than the minimum.
   */
  min?: number;
  /**
   * For 'bundle-size' type, the value is in bytes. Benchmark score is 0 if the value is equal or greater than the maximum.
   * For 'performance' type, the value is in milliseconds. Benchmark score is 0 if the value is equal or greater than the maximum.
   */
  max?: number;
}
