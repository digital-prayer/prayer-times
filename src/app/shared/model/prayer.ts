/**
 * This interface represents a pray
 */
export interface Prayer {

  /**
   * The name of the prayer. The name gives
   */
  name?: string;

  /**
   * Shows the time for the prayer
   */
  time?: string;

  /**
   * This property shows if the current prayer has been passed.
   *
   */
  passed?: boolean;

}
