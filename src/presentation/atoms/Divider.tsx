import clsx from "clsx";

type DividerProp = {
  className?: string;
};

export function Divider(props: DividerProp) {
  return <div className={clsx("w-full h-[1px]", props.className)}></div>;
}
