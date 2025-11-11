"use client";
import dynamic from "next/dynamic";
const GMaps = dynamic(() => import("@/components/gmaps"), { ssr: false });

export default function GMapsWrapper(props: { height?: number }) {
  return <GMaps height={props.height} />;
}