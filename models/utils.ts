import { SerializedStyles } from "@emotion/serialize";

type ValueType = string | number | boolean;

export type Union<
  T extends { [k: string]: ValueType } | ReadonlyArray<ValueType>
> = T extends ReadonlyArray<ValueType>
  ? T[number]
  : T extends { [k: string]: infer U }
  ? U
  : never;

export type OrNull<Type> = Type | null;

export type OrUndefined<Type> = Type | undefined;

export type OrFull<Type> = Type | undefined | null;

export type OneOrMany<Type> = Type | Type[];

export type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;

export type BooleanControl = {
  isTrue: boolean;
};

export type Checked = {
  isChecked: boolean;
};

export type AppendStyled = {
  styleCSS?: SerializedStyles;
};
