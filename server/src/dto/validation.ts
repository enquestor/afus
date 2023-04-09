import { ValidationOptions, registerDecorator } from 'class-validator';

export function NotContainsAfusUrl(
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return (object, propertyName: string) => {
    registerDecorator({
      name: 'notContainsAfusUrl',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: string) {
          if (typeof process.env.AFUS_URL === 'undefined') {
            return true;
          } else {
            return !value.includes(process.env.AFUS_URL);
          }
        },
      },
    });
  };
}
