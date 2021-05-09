// Mapped Types https://www.udemy.com/course/react-with-typescript/learn/lecture/19895226#overview

type Props = 'propA' | 'propB';
type MyMappedType<T> = {
    [P in keyof T]: T[P] | null
};

type myNewType = MyMappedType<{ a: 'a'; b: 'b' }>;

type Pick1<T, Props extends keyof T> = {
    [P in Props]: T[P]
}

type myNewType2 = Pick1<{ a: 'a'; b: 'b' }, 'a'>