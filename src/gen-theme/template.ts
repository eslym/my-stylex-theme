function* prop(name: string, value: Iterable<string>) {
    yield* name;
    yield* ': ';
    yield* indent(value);
}

export function* obj(pairs: Iterable<[string, Iterable<string>]>) {
    yield* '{\n';
    const p = [...pairs];
    for (let i = 0; i < p.length; i++) {
        const [name, value] = p[i];
        yield* '  ';
        yield* prop(name, value);
        yield* ',\n';
    }
    yield* '}';
}

export function* concat(...args: Iterable<string>[]) {
    for (const a of args) {
        yield* a;
    }
}

function* indent(iter: Iterable<string>) {
    for (const s of iter) {
        for (const c of s) {
            yield c;
            if (c === '\n') {
                yield* '  ';
            }
        }
    }
}

export function* lined(lines: Iterable<string | Iterable<string>>) {
    for (const s of lines) {
        yield* s;
        yield* '\n';
    }
}

export function collect(iter: Iterable<string>) {
    let result = '';
    for (const s of iter) {
        result += s;
    }
    return result;
}
