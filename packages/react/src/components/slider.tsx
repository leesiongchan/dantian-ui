"use client";

import {
  Slider as BaseSlider,
  For,
  SliderThumbProps,
  useSliderContext,
  UseSliderProps,
} from "@chakra-ui/react";
import React from "react";

export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  function Slider({ marks, ...props }, ref) {
    return (
      <BaseSlider.Root ref={ref} thumbAlignment="center" {...props}>
        <BaseSlider.Control>
          <BaseSlider.Track>
            <BaseSlider.Range />
          </BaseSlider.Track>
          <SliderThumbs />
          <BaseSlider.Marks marks={marks} />
        </BaseSlider.Control>
      </BaseSlider.Root>
    );
  }
);
export interface SliderProps extends UseSliderProps {
  marks?: Array<number | { value: number; label: React.ReactNode }>;
}

const SliderThumbs = (props: Omit<SliderThumbProps, "index">) => {
  const api = useSliderContext();

  return (
    <For each={api.value}>
      {(_, index) => (
        <BaseSlider.Thumb key={index} index={index} {...props}>
          <BaseSlider.DraggingIndicator
            layerStyle="fill.solid"
            top="6"
            rounded="sm"
            px="1.5"
          >
            <span {...api.getValueTextProps()}>{api.value[index]}</span>
          </BaseSlider.DraggingIndicator>
          <BaseSlider.HiddenInput />
        </BaseSlider.Thumb>
      )}
    </For>
  );
};
