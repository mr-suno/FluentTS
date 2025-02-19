/*

    Includes: .OnChanged
              .SetValue
              .Destroy

*/

export interface ToggleOptions {
    Title: string;                           // The title (header) of the toggle.
    Description?: string;                    // Explains what the toggle does.
    Locked?: boolean;                        // Entirely disables all actions related to the toggle.
    Default?: boolean;                       // The default state of the toggle. (true or false)
    Callback: (value: boolean) => void;      // The function that is called when the toggle changes.
}

export interface Toggle {
    /**
     * Registers a function to be called when the toggle state changes.
     * @param callback - Customizable function to call.
     */
    OnChanged(callback: (value: boolean) => void): void;

    /**
     * Sets the value of the toggle:
     * @param value - The new value for the toggle. (true or false)
     */
    SetValue(value: boolean): void;

    /**
     * Destroys the toggle object.
     */
    Destroy(): void;
}
