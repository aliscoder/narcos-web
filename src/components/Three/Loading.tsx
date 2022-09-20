import React, { useProgress } from "@react-three/drei";
import { useContext, useEffect } from "react";
import { LoadingPercent } from "../../providers/Index";

export default function Loading() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  const  {loading , setLoading}  = useContext(LoadingPercent);

  useEffect(() => {
    setLoading((percent: any) =>
      percent < +progress.toFixed(0) && active ? +progress.toFixed(0) : percent
    );
  }, [progress]);

  useEffect(() => {
    return () => {
      setLoading(100)
    };
  }, []);

  return null;
}
