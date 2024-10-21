import { ColorPicker } from './colorpicker';
import { Color3 } from './color3';
import { Input } from 'fluentts/types/input';
import { Dropdown } from 'fluentts/types/dropdown';
import { Keybind } from 'fluentts/types/keybind';
import { Toggle } from 'fluentts/types/toggle';
import { Slider } from 'fluentts/types/slider';

/*

    Includes: .AddSection
              .AddColorpicker
              .AddInput
              .AddButton
              .AddDropdown
              .AddKeybind
              .AddToggle
              .AddSlider
              .AddParagraph

*/

export interface Tab {
    /**
     * Adds a section to the tab.
     * @param title - The title of the section.
     */
    AddSection(title: string): void;

    /**
     * Adds a color picker to the tab.
     * @param id - Identifier for the color picker.
     * @param options - Customizable options for the color picker.
     */
    AddColorpicker(id: string, options: { Title: string; Default: Color3 }): ColorPicker;

    /**
     * Adds an input field to the tab.
     * @param id - Identifier for the input.
     * @param options - Options for the input field.
     */
    AddInput(id: string, options: {
        Title: string;
        Description: string;
        Default?: string;
        Placeholder?: string;
        Numeric?: boolean;
        Finished?: boolean;
        Callback?: (value: string) => void;
    }): Input;

    /**
     * Adds a button to the tab.
     * @param options - Options for the button.
     */
    AddButton(options: {
        Title: string;
        Description?: string;
        Callback: () => void;
    }): void;

    /**
     * Adds a dropdown to the tab.
     * @param id - Identifier for the dropdown.
     * @param options - Options for the dropdown.
     */
    AddDropdown(id: string, options: {
        Title: string;
        Values: string[];
        Multi?: boolean;
        Default?: number;
    }): Dropdown;

    /**
     * Adds a keybind to the tab.
     * @param id - Identifier for the keybind.
     * @param options - Options for the keybind.
     */
    AddKeybind(id: string, options: {
        Title: string;
        Mode: 'Always' | 'Toggle' | 'Hold';
        Default?: string;
        Callback?: (value: boolean) => void;
        ChangedCallback?: (newKey: string) => void;
    }): Keybind;

    /**
     * Adds a toggle to the tab.
     * @param id - Identifier for the toggle.
     * @param options - Options for the toggle.
     */
    AddToggle(id: string, options: {
        Title: string;
        Default?: boolean;
    }): Toggle;

    /**
     * Adds a slider to the tab.
     * @param id - Identifier for the slider.
     * @param options - Options for the slider.
     */
    AddSlider(id: string, options: {
        Title: string;
        Description?: string;
        Default: number;
        Min: number;
        Max: number;
        Rounding?: number;
        Callback?: (value: number) => void;
    }): Slider;

    /**
     * Adds a paragraph to the tab.
     * @param options - Options for the paragraph.
     */
    AddParagraph(options: {
        Title: string;
        Content?: string;
    }): void;
}
