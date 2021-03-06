import {DecoratorParameters, getDecoratorType, Storable} from "@tsed/core";
import {ParamMetadata} from "../models/ParamMetadata";
import {PropertyMetadata} from "../models/PropertyMetadata";

export function getStorableMetadata(decoratorArgs: DecoratorParameters): ParamMetadata | PropertyMetadata | undefined {
  switch (getDecoratorType(decoratorArgs, true)) {
    case "parameter":
      return ParamMetadata.get(decoratorArgs[0], decoratorArgs[1], decoratorArgs[2] as number);
    case "property":
      return PropertyMetadata.get(decoratorArgs[0], decoratorArgs[1]);
  }
}
