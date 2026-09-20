import React from "react";
import { render, screen, act } from "@testing-library/react";
import { useRevealOnScroll } from "./useRevealOnScroll";

class MockIntersectionObserver {
  static instances: MockIntersectionObserver[] = [];
  callback: IntersectionObserverCallback;
  observe = jest.fn();
  disconnect = jest.fn();
  unobserve = jest.fn();

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
    MockIntersectionObserver.instances.push(this);
  }

  trigger(isIntersecting: boolean) {
    this.callback(
      [{ isIntersecting } as IntersectionObserverEntry],
      this as unknown as IntersectionObserver
    );
  }
}

const RevealTestComponent = () => {
  const [ref, visible] = useRevealOnScroll<HTMLDivElement>();
  return <div ref={ref}>{visible ? "visible" : "hidden"}</div>;
};

describe("useRevealOnScroll", () => {
  beforeEach(() => {
    MockIntersectionObserver.instances = [];
    (global as any).IntersectionObserver = MockIntersectionObserver;
  });

  it("starts hidden", () => {
    render(<RevealTestComponent />);
    expect(screen.getByText("hidden")).toBeInTheDocument();
  });

  it("becomes visible once the observed element intersects", () => {
    render(<RevealTestComponent />);
    const observer = MockIntersectionObserver.instances[0];

    act(() => {
      observer.trigger(true);
    });

    expect(screen.getByText("visible")).toBeInTheDocument();
  });

  it("disconnects the observer after becoming visible", () => {
    render(<RevealTestComponent />);
    const observer = MockIntersectionObserver.instances[0];

    act(() => {
      observer.trigger(true);
    });

    expect(observer.disconnect).toHaveBeenCalledTimes(1);
  });
});
