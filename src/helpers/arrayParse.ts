import { ForbiddenException } from "@nestjs/common";

export function arrayParse(object: string | string[]) : string[]{
    if (typeof object !== 'string') {
        // return ['wrong argument type'];
        throw new ForbiddenException('Data type is wrong in the arrayParse')
    }

    const objectParsed = JSON.parse(object);

    const array = []

    for (let i in objectParsed) {
        array[i] = objectParsed[i]
    }

    return array;
}