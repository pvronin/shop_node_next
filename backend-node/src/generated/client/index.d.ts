
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model discounts
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 * This model has constraints using non-default deferring rules and requires additional setup for migrations. Visit https://pris.ly/d/constraint-deferring for more info.
 */
export type discounts = $Result.DefaultSelection<Prisma.$discountsPayload>
/**
 * Model productcategories
 * 
 */
export type productcategories = $Result.DefaultSelection<Prisma.$productcategoriesPayload>
/**
 * Model productcomments
 * This model has constraints using non-default deferring rules and requires additional setup for migrations. Visit https://pris.ly/d/constraint-deferring for more info.
 */
export type productcomments = $Result.DefaultSelection<Prisma.$productcommentsPayload>
/**
 * Model products
 * This model has constraints using non-default deferring rules and requires additional setup for migrations. Visit https://pris.ly/d/constraint-deferring for more info.
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model addresses
 * 
 */
export type addresses = $Result.DefaultSelection<Prisma.$addressesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Discounts
 * const discounts = await prisma.discounts.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Discounts
   * const discounts = await prisma.discounts.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.discounts`: Exposes CRUD operations for the **discounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Discounts
    * const discounts = await prisma.discounts.findMany()
    * ```
    */
  get discounts(): Prisma.discountsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productcategories`: Exposes CRUD operations for the **productcategories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productcategories
    * const productcategories = await prisma.productcategories.findMany()
    * ```
    */
  get productcategories(): Prisma.productcategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productcomments`: Exposes CRUD operations for the **productcomments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productcomments
    * const productcomments = await prisma.productcomments.findMany()
    * ```
    */
  get productcomments(): Prisma.productcommentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.addresses`: Exposes CRUD operations for the **addresses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.addresses.findMany()
    * ```
    */
  get addresses(): Prisma.addressesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    discounts: 'discounts',
    productcategories: 'productcategories',
    productcomments: 'productcomments',
    products: 'products',
    users: 'users',
    addresses: 'addresses'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "discounts" | "productcategories" | "productcomments" | "products" | "users" | "addresses"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      discounts: {
        payload: Prisma.$discountsPayload<ExtArgs>
        fields: Prisma.discountsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.discountsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discountsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.discountsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discountsPayload>
          }
          findFirst: {
            args: Prisma.discountsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discountsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.discountsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discountsPayload>
          }
          findMany: {
            args: Prisma.discountsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discountsPayload>[]
          }
          create: {
            args: Prisma.discountsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discountsPayload>
          }
          createMany: {
            args: Prisma.discountsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.discountsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discountsPayload>[]
          }
          delete: {
            args: Prisma.discountsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discountsPayload>
          }
          update: {
            args: Prisma.discountsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discountsPayload>
          }
          deleteMany: {
            args: Prisma.discountsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.discountsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.discountsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discountsPayload>[]
          }
          upsert: {
            args: Prisma.discountsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discountsPayload>
          }
          aggregate: {
            args: Prisma.DiscountsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscounts>
          }
          groupBy: {
            args: Prisma.discountsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscountsGroupByOutputType>[]
          }
          count: {
            args: Prisma.discountsCountArgs<ExtArgs>
            result: $Utils.Optional<DiscountsCountAggregateOutputType> | number
          }
        }
      }
      productcategories: {
        payload: Prisma.$productcategoriesPayload<ExtArgs>
        fields: Prisma.productcategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productcategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productcategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productcategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productcategoriesPayload>
          }
          findFirst: {
            args: Prisma.productcategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productcategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productcategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productcategoriesPayload>
          }
          findMany: {
            args: Prisma.productcategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productcategoriesPayload>[]
          }
          create: {
            args: Prisma.productcategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productcategoriesPayload>
          }
          createMany: {
            args: Prisma.productcategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productcategoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productcategoriesPayload>[]
          }
          delete: {
            args: Prisma.productcategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productcategoriesPayload>
          }
          update: {
            args: Prisma.productcategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productcategoriesPayload>
          }
          deleteMany: {
            args: Prisma.productcategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productcategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productcategoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productcategoriesPayload>[]
          }
          upsert: {
            args: Prisma.productcategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productcategoriesPayload>
          }
          aggregate: {
            args: Prisma.ProductcategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductcategories>
          }
          groupBy: {
            args: Prisma.productcategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductcategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.productcategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<ProductcategoriesCountAggregateOutputType> | number
          }
        }
      }
      productcomments: {
        payload: Prisma.$productcommentsPayload<ExtArgs>
        fields: Prisma.productcommentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productcommentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productcommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productcommentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productcommentsPayload>
          }
          findFirst: {
            args: Prisma.productcommentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productcommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productcommentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productcommentsPayload>
          }
          findMany: {
            args: Prisma.productcommentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productcommentsPayload>[]
          }
          create: {
            args: Prisma.productcommentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productcommentsPayload>
          }
          createMany: {
            args: Prisma.productcommentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productcommentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productcommentsPayload>[]
          }
          delete: {
            args: Prisma.productcommentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productcommentsPayload>
          }
          update: {
            args: Prisma.productcommentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productcommentsPayload>
          }
          deleteMany: {
            args: Prisma.productcommentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productcommentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productcommentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productcommentsPayload>[]
          }
          upsert: {
            args: Prisma.productcommentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productcommentsPayload>
          }
          aggregate: {
            args: Prisma.ProductcommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductcomments>
          }
          groupBy: {
            args: Prisma.productcommentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductcommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productcommentsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductcommentsCountAggregateOutputType> | number
          }
        }
      }
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      addresses: {
        payload: Prisma.$addressesPayload<ExtArgs>
        fields: Prisma.addressesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.addressesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.addressesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          findFirst: {
            args: Prisma.addressesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.addressesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          findMany: {
            args: Prisma.addressesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>[]
          }
          create: {
            args: Prisma.addressesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          createMany: {
            args: Prisma.addressesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.addressesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>[]
          }
          delete: {
            args: Prisma.addressesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          update: {
            args: Prisma.addressesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          deleteMany: {
            args: Prisma.addressesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.addressesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.addressesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>[]
          }
          upsert: {
            args: Prisma.addressesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          aggregate: {
            args: Prisma.AddressesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddresses>
          }
          groupBy: {
            args: Prisma.addressesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressesGroupByOutputType>[]
          }
          count: {
            args: Prisma.addressesCountArgs<ExtArgs>
            result: $Utils.Optional<AddressesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    discounts?: discountsOmit
    productcategories?: productcategoriesOmit
    productcomments?: productcommentsOmit
    products?: productsOmit
    users?: usersOmit
    addresses?: addressesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProductcategoriesCountOutputType
   */

  export type ProductcategoriesCountOutputType = {
    products: number
  }

  export type ProductcategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductcategoriesCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * ProductcategoriesCountOutputType without action
   */
  export type ProductcategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductcategoriesCountOutputType
     */
    select?: ProductcategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductcategoriesCountOutputType without action
   */
  export type ProductcategoriesCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    discounts: number
    productcomments: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discounts?: boolean | ProductsCountOutputTypeCountDiscountsArgs
    productcomments?: boolean | ProductsCountOutputTypeCountProductcommentsArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountDiscountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: discountsWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountProductcommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productcommentsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model discounts
   */

  export type AggregateDiscounts = {
    _count: DiscountsCountAggregateOutputType | null
    _avg: DiscountsAvgAggregateOutputType | null
    _sum: DiscountsSumAggregateOutputType | null
    _min: DiscountsMinAggregateOutputType | null
    _max: DiscountsMaxAggregateOutputType | null
  }

  export type DiscountsAvgAggregateOutputType = {
    id: number | null
    percent: number | null
    product_id: number | null
  }

  export type DiscountsSumAggregateOutputType = {
    id: number | null
    percent: number | null
    product_id: number | null
  }

  export type DiscountsMinAggregateOutputType = {
    id: number | null
    title: string | null
    percent: number | null
    start_date: Date | null
    end_date: Date | null
    is_active: boolean | null
    product_id: number | null
  }

  export type DiscountsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    percent: number | null
    start_date: Date | null
    end_date: Date | null
    is_active: boolean | null
    product_id: number | null
  }

  export type DiscountsCountAggregateOutputType = {
    id: number
    title: number
    percent: number
    start_date: number
    end_date: number
    is_active: number
    product_id: number
    _all: number
  }


  export type DiscountsAvgAggregateInputType = {
    id?: true
    percent?: true
    product_id?: true
  }

  export type DiscountsSumAggregateInputType = {
    id?: true
    percent?: true
    product_id?: true
  }

  export type DiscountsMinAggregateInputType = {
    id?: true
    title?: true
    percent?: true
    start_date?: true
    end_date?: true
    is_active?: true
    product_id?: true
  }

  export type DiscountsMaxAggregateInputType = {
    id?: true
    title?: true
    percent?: true
    start_date?: true
    end_date?: true
    is_active?: true
    product_id?: true
  }

  export type DiscountsCountAggregateInputType = {
    id?: true
    title?: true
    percent?: true
    start_date?: true
    end_date?: true
    is_active?: true
    product_id?: true
    _all?: true
  }

  export type DiscountsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which discounts to aggregate.
     */
    where?: discountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of discounts to fetch.
     */
    orderBy?: discountsOrderByWithRelationInput | discountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: discountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` discounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` discounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned discounts
    **/
    _count?: true | DiscountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiscountsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiscountsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscountsMaxAggregateInputType
  }

  export type GetDiscountsAggregateType<T extends DiscountsAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscounts[P]>
      : GetScalarType<T[P], AggregateDiscounts[P]>
  }




  export type discountsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: discountsWhereInput
    orderBy?: discountsOrderByWithAggregationInput | discountsOrderByWithAggregationInput[]
    by: DiscountsScalarFieldEnum[] | DiscountsScalarFieldEnum
    having?: discountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscountsCountAggregateInputType | true
    _avg?: DiscountsAvgAggregateInputType
    _sum?: DiscountsSumAggregateInputType
    _min?: DiscountsMinAggregateInputType
    _max?: DiscountsMaxAggregateInputType
  }

  export type DiscountsGroupByOutputType = {
    id: number
    title: string
    percent: number
    start_date: Date
    end_date: Date
    is_active: boolean
    product_id: number
    _count: DiscountsCountAggregateOutputType | null
    _avg: DiscountsAvgAggregateOutputType | null
    _sum: DiscountsSumAggregateOutputType | null
    _min: DiscountsMinAggregateOutputType | null
    _max: DiscountsMaxAggregateOutputType | null
  }

  type GetDiscountsGroupByPayload<T extends discountsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscountsGroupByOutputType[P]>
            : GetScalarType<T[P], DiscountsGroupByOutputType[P]>
        }
      >
    >


  export type discountsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    percent?: boolean
    start_date?: boolean
    end_date?: boolean
    is_active?: boolean
    product_id?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discounts"]>

  export type discountsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    percent?: boolean
    start_date?: boolean
    end_date?: boolean
    is_active?: boolean
    product_id?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discounts"]>

  export type discountsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    percent?: boolean
    start_date?: boolean
    end_date?: boolean
    is_active?: boolean
    product_id?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discounts"]>

  export type discountsSelectScalar = {
    id?: boolean
    title?: boolean
    percent?: boolean
    start_date?: boolean
    end_date?: boolean
    is_active?: boolean
    product_id?: boolean
  }

  export type discountsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "percent" | "start_date" | "end_date" | "is_active" | "product_id", ExtArgs["result"]["discounts"]>
  export type discountsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type discountsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type discountsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
  }

  export type $discountsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "discounts"
    objects: {
      products: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      percent: number
      start_date: Date
      end_date: Date
      is_active: boolean
      product_id: number
    }, ExtArgs["result"]["discounts"]>
    composites: {}
  }

  type discountsGetPayload<S extends boolean | null | undefined | discountsDefaultArgs> = $Result.GetResult<Prisma.$discountsPayload, S>

  type discountsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<discountsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiscountsCountAggregateInputType | true
    }

  export interface discountsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['discounts'], meta: { name: 'discounts' } }
    /**
     * Find zero or one Discounts that matches the filter.
     * @param {discountsFindUniqueArgs} args - Arguments to find a Discounts
     * @example
     * // Get one Discounts
     * const discounts = await prisma.discounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends discountsFindUniqueArgs>(args: SelectSubset<T, discountsFindUniqueArgs<ExtArgs>>): Prisma__discountsClient<$Result.GetResult<Prisma.$discountsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Discounts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {discountsFindUniqueOrThrowArgs} args - Arguments to find a Discounts
     * @example
     * // Get one Discounts
     * const discounts = await prisma.discounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends discountsFindUniqueOrThrowArgs>(args: SelectSubset<T, discountsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__discountsClient<$Result.GetResult<Prisma.$discountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discountsFindFirstArgs} args - Arguments to find a Discounts
     * @example
     * // Get one Discounts
     * const discounts = await prisma.discounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends discountsFindFirstArgs>(args?: SelectSubset<T, discountsFindFirstArgs<ExtArgs>>): Prisma__discountsClient<$Result.GetResult<Prisma.$discountsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discounts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discountsFindFirstOrThrowArgs} args - Arguments to find a Discounts
     * @example
     * // Get one Discounts
     * const discounts = await prisma.discounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends discountsFindFirstOrThrowArgs>(args?: SelectSubset<T, discountsFindFirstOrThrowArgs<ExtArgs>>): Prisma__discountsClient<$Result.GetResult<Prisma.$discountsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Discounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discountsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Discounts
     * const discounts = await prisma.discounts.findMany()
     * 
     * // Get first 10 Discounts
     * const discounts = await prisma.discounts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discountsWithIdOnly = await prisma.discounts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends discountsFindManyArgs>(args?: SelectSubset<T, discountsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$discountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Discounts.
     * @param {discountsCreateArgs} args - Arguments to create a Discounts.
     * @example
     * // Create one Discounts
     * const Discounts = await prisma.discounts.create({
     *   data: {
     *     // ... data to create a Discounts
     *   }
     * })
     * 
     */
    create<T extends discountsCreateArgs>(args: SelectSubset<T, discountsCreateArgs<ExtArgs>>): Prisma__discountsClient<$Result.GetResult<Prisma.$discountsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Discounts.
     * @param {discountsCreateManyArgs} args - Arguments to create many Discounts.
     * @example
     * // Create many Discounts
     * const discounts = await prisma.discounts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends discountsCreateManyArgs>(args?: SelectSubset<T, discountsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Discounts and returns the data saved in the database.
     * @param {discountsCreateManyAndReturnArgs} args - Arguments to create many Discounts.
     * @example
     * // Create many Discounts
     * const discounts = await prisma.discounts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Discounts and only return the `id`
     * const discountsWithIdOnly = await prisma.discounts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends discountsCreateManyAndReturnArgs>(args?: SelectSubset<T, discountsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$discountsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Discounts.
     * @param {discountsDeleteArgs} args - Arguments to delete one Discounts.
     * @example
     * // Delete one Discounts
     * const Discounts = await prisma.discounts.delete({
     *   where: {
     *     // ... filter to delete one Discounts
     *   }
     * })
     * 
     */
    delete<T extends discountsDeleteArgs>(args: SelectSubset<T, discountsDeleteArgs<ExtArgs>>): Prisma__discountsClient<$Result.GetResult<Prisma.$discountsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Discounts.
     * @param {discountsUpdateArgs} args - Arguments to update one Discounts.
     * @example
     * // Update one Discounts
     * const discounts = await prisma.discounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends discountsUpdateArgs>(args: SelectSubset<T, discountsUpdateArgs<ExtArgs>>): Prisma__discountsClient<$Result.GetResult<Prisma.$discountsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Discounts.
     * @param {discountsDeleteManyArgs} args - Arguments to filter Discounts to delete.
     * @example
     * // Delete a few Discounts
     * const { count } = await prisma.discounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends discountsDeleteManyArgs>(args?: SelectSubset<T, discountsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Discounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Discounts
     * const discounts = await prisma.discounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends discountsUpdateManyArgs>(args: SelectSubset<T, discountsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Discounts and returns the data updated in the database.
     * @param {discountsUpdateManyAndReturnArgs} args - Arguments to update many Discounts.
     * @example
     * // Update many Discounts
     * const discounts = await prisma.discounts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Discounts and only return the `id`
     * const discountsWithIdOnly = await prisma.discounts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends discountsUpdateManyAndReturnArgs>(args: SelectSubset<T, discountsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$discountsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Discounts.
     * @param {discountsUpsertArgs} args - Arguments to update or create a Discounts.
     * @example
     * // Update or create a Discounts
     * const discounts = await prisma.discounts.upsert({
     *   create: {
     *     // ... data to create a Discounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Discounts we want to update
     *   }
     * })
     */
    upsert<T extends discountsUpsertArgs>(args: SelectSubset<T, discountsUpsertArgs<ExtArgs>>): Prisma__discountsClient<$Result.GetResult<Prisma.$discountsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Discounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discountsCountArgs} args - Arguments to filter Discounts to count.
     * @example
     * // Count the number of Discounts
     * const count = await prisma.discounts.count({
     *   where: {
     *     // ... the filter for the Discounts we want to count
     *   }
     * })
    **/
    count<T extends discountsCountArgs>(
      args?: Subset<T, discountsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Discounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiscountsAggregateArgs>(args: Subset<T, DiscountsAggregateArgs>): Prisma.PrismaPromise<GetDiscountsAggregateType<T>>

    /**
     * Group by Discounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discountsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends discountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: discountsGroupByArgs['orderBy'] }
        : { orderBy?: discountsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, discountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscountsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the discounts model
   */
  readonly fields: discountsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for discounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__discountsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the discounts model
   */
  interface discountsFieldRefs {
    readonly id: FieldRef<"discounts", 'Int'>
    readonly title: FieldRef<"discounts", 'String'>
    readonly percent: FieldRef<"discounts", 'Int'>
    readonly start_date: FieldRef<"discounts", 'DateTime'>
    readonly end_date: FieldRef<"discounts", 'DateTime'>
    readonly is_active: FieldRef<"discounts", 'Boolean'>
    readonly product_id: FieldRef<"discounts", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * discounts findUnique
   */
  export type discountsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discounts
     */
    select?: discountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discounts
     */
    omit?: discountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: discountsInclude<ExtArgs> | null
    /**
     * Filter, which discounts to fetch.
     */
    where: discountsWhereUniqueInput
  }

  /**
   * discounts findUniqueOrThrow
   */
  export type discountsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discounts
     */
    select?: discountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discounts
     */
    omit?: discountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: discountsInclude<ExtArgs> | null
    /**
     * Filter, which discounts to fetch.
     */
    where: discountsWhereUniqueInput
  }

  /**
   * discounts findFirst
   */
  export type discountsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discounts
     */
    select?: discountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discounts
     */
    omit?: discountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: discountsInclude<ExtArgs> | null
    /**
     * Filter, which discounts to fetch.
     */
    where?: discountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of discounts to fetch.
     */
    orderBy?: discountsOrderByWithRelationInput | discountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for discounts.
     */
    cursor?: discountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` discounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` discounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of discounts.
     */
    distinct?: DiscountsScalarFieldEnum | DiscountsScalarFieldEnum[]
  }

  /**
   * discounts findFirstOrThrow
   */
  export type discountsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discounts
     */
    select?: discountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discounts
     */
    omit?: discountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: discountsInclude<ExtArgs> | null
    /**
     * Filter, which discounts to fetch.
     */
    where?: discountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of discounts to fetch.
     */
    orderBy?: discountsOrderByWithRelationInput | discountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for discounts.
     */
    cursor?: discountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` discounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` discounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of discounts.
     */
    distinct?: DiscountsScalarFieldEnum | DiscountsScalarFieldEnum[]
  }

  /**
   * discounts findMany
   */
  export type discountsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discounts
     */
    select?: discountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discounts
     */
    omit?: discountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: discountsInclude<ExtArgs> | null
    /**
     * Filter, which discounts to fetch.
     */
    where?: discountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of discounts to fetch.
     */
    orderBy?: discountsOrderByWithRelationInput | discountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing discounts.
     */
    cursor?: discountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` discounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` discounts.
     */
    skip?: number
    distinct?: DiscountsScalarFieldEnum | DiscountsScalarFieldEnum[]
  }

  /**
   * discounts create
   */
  export type discountsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discounts
     */
    select?: discountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discounts
     */
    omit?: discountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: discountsInclude<ExtArgs> | null
    /**
     * The data needed to create a discounts.
     */
    data: XOR<discountsCreateInput, discountsUncheckedCreateInput>
  }

  /**
   * discounts createMany
   */
  export type discountsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many discounts.
     */
    data: discountsCreateManyInput | discountsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * discounts createManyAndReturn
   */
  export type discountsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discounts
     */
    select?: discountsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the discounts
     */
    omit?: discountsOmit<ExtArgs> | null
    /**
     * The data used to create many discounts.
     */
    data: discountsCreateManyInput | discountsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: discountsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * discounts update
   */
  export type discountsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discounts
     */
    select?: discountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discounts
     */
    omit?: discountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: discountsInclude<ExtArgs> | null
    /**
     * The data needed to update a discounts.
     */
    data: XOR<discountsUpdateInput, discountsUncheckedUpdateInput>
    /**
     * Choose, which discounts to update.
     */
    where: discountsWhereUniqueInput
  }

  /**
   * discounts updateMany
   */
  export type discountsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update discounts.
     */
    data: XOR<discountsUpdateManyMutationInput, discountsUncheckedUpdateManyInput>
    /**
     * Filter which discounts to update
     */
    where?: discountsWhereInput
    /**
     * Limit how many discounts to update.
     */
    limit?: number
  }

  /**
   * discounts updateManyAndReturn
   */
  export type discountsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discounts
     */
    select?: discountsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the discounts
     */
    omit?: discountsOmit<ExtArgs> | null
    /**
     * The data used to update discounts.
     */
    data: XOR<discountsUpdateManyMutationInput, discountsUncheckedUpdateManyInput>
    /**
     * Filter which discounts to update
     */
    where?: discountsWhereInput
    /**
     * Limit how many discounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: discountsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * discounts upsert
   */
  export type discountsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discounts
     */
    select?: discountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discounts
     */
    omit?: discountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: discountsInclude<ExtArgs> | null
    /**
     * The filter to search for the discounts to update in case it exists.
     */
    where: discountsWhereUniqueInput
    /**
     * In case the discounts found by the `where` argument doesn't exist, create a new discounts with this data.
     */
    create: XOR<discountsCreateInput, discountsUncheckedCreateInput>
    /**
     * In case the discounts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<discountsUpdateInput, discountsUncheckedUpdateInput>
  }

  /**
   * discounts delete
   */
  export type discountsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discounts
     */
    select?: discountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discounts
     */
    omit?: discountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: discountsInclude<ExtArgs> | null
    /**
     * Filter which discounts to delete.
     */
    where: discountsWhereUniqueInput
  }

  /**
   * discounts deleteMany
   */
  export type discountsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which discounts to delete
     */
    where?: discountsWhereInput
    /**
     * Limit how many discounts to delete.
     */
    limit?: number
  }

  /**
   * discounts without action
   */
  export type discountsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discounts
     */
    select?: discountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discounts
     */
    omit?: discountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: discountsInclude<ExtArgs> | null
  }


  /**
   * Model productcategories
   */

  export type AggregateProductcategories = {
    _count: ProductcategoriesCountAggregateOutputType | null
    _avg: ProductcategoriesAvgAggregateOutputType | null
    _sum: ProductcategoriesSumAggregateOutputType | null
    _min: ProductcategoriesMinAggregateOutputType | null
    _max: ProductcategoriesMaxAggregateOutputType | null
  }

  export type ProductcategoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type ProductcategoriesSumAggregateOutputType = {
    id: number | null
  }

  export type ProductcategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
  }

  export type ProductcategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
  }

  export type ProductcategoriesCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    _all: number
  }


  export type ProductcategoriesAvgAggregateInputType = {
    id?: true
  }

  export type ProductcategoriesSumAggregateInputType = {
    id?: true
  }

  export type ProductcategoriesMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
  }

  export type ProductcategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
  }

  export type ProductcategoriesCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    _all?: true
  }

  export type ProductcategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productcategories to aggregate.
     */
    where?: productcategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productcategories to fetch.
     */
    orderBy?: productcategoriesOrderByWithRelationInput | productcategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productcategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned productcategories
    **/
    _count?: true | ProductcategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductcategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductcategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductcategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductcategoriesMaxAggregateInputType
  }

  export type GetProductcategoriesAggregateType<T extends ProductcategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateProductcategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductcategories[P]>
      : GetScalarType<T[P], AggregateProductcategories[P]>
  }




  export type productcategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productcategoriesWhereInput
    orderBy?: productcategoriesOrderByWithAggregationInput | productcategoriesOrderByWithAggregationInput[]
    by: ProductcategoriesScalarFieldEnum[] | ProductcategoriesScalarFieldEnum
    having?: productcategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductcategoriesCountAggregateInputType | true
    _avg?: ProductcategoriesAvgAggregateInputType
    _sum?: ProductcategoriesSumAggregateInputType
    _min?: ProductcategoriesMinAggregateInputType
    _max?: ProductcategoriesMaxAggregateInputType
  }

  export type ProductcategoriesGroupByOutputType = {
    id: number
    name: string
    slug: string
    _count: ProductcategoriesCountAggregateOutputType | null
    _avg: ProductcategoriesAvgAggregateOutputType | null
    _sum: ProductcategoriesSumAggregateOutputType | null
    _min: ProductcategoriesMinAggregateOutputType | null
    _max: ProductcategoriesMaxAggregateOutputType | null
  }

  type GetProductcategoriesGroupByPayload<T extends productcategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductcategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductcategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductcategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], ProductcategoriesGroupByOutputType[P]>
        }
      >
    >


  export type productcategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    products?: boolean | productcategories$productsArgs<ExtArgs>
    _count?: boolean | ProductcategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productcategories"]>

  export type productcategoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
  }, ExtArgs["result"]["productcategories"]>

  export type productcategoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
  }, ExtArgs["result"]["productcategories"]>

  export type productcategoriesSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
  }

  export type productcategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug", ExtArgs["result"]["productcategories"]>
  export type productcategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productcategories$productsArgs<ExtArgs>
    _count?: boolean | ProductcategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productcategoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type productcategoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $productcategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "productcategories"
    objects: {
      products: Prisma.$productsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
    }, ExtArgs["result"]["productcategories"]>
    composites: {}
  }

  type productcategoriesGetPayload<S extends boolean | null | undefined | productcategoriesDefaultArgs> = $Result.GetResult<Prisma.$productcategoriesPayload, S>

  type productcategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productcategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductcategoriesCountAggregateInputType | true
    }

  export interface productcategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['productcategories'], meta: { name: 'productcategories' } }
    /**
     * Find zero or one Productcategories that matches the filter.
     * @param {productcategoriesFindUniqueArgs} args - Arguments to find a Productcategories
     * @example
     * // Get one Productcategories
     * const productcategories = await prisma.productcategories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productcategoriesFindUniqueArgs>(args: SelectSubset<T, productcategoriesFindUniqueArgs<ExtArgs>>): Prisma__productcategoriesClient<$Result.GetResult<Prisma.$productcategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Productcategories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productcategoriesFindUniqueOrThrowArgs} args - Arguments to find a Productcategories
     * @example
     * // Get one Productcategories
     * const productcategories = await prisma.productcategories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productcategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, productcategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productcategoriesClient<$Result.GetResult<Prisma.$productcategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Productcategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productcategoriesFindFirstArgs} args - Arguments to find a Productcategories
     * @example
     * // Get one Productcategories
     * const productcategories = await prisma.productcategories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productcategoriesFindFirstArgs>(args?: SelectSubset<T, productcategoriesFindFirstArgs<ExtArgs>>): Prisma__productcategoriesClient<$Result.GetResult<Prisma.$productcategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Productcategories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productcategoriesFindFirstOrThrowArgs} args - Arguments to find a Productcategories
     * @example
     * // Get one Productcategories
     * const productcategories = await prisma.productcategories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productcategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, productcategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__productcategoriesClient<$Result.GetResult<Prisma.$productcategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productcategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productcategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productcategories
     * const productcategories = await prisma.productcategories.findMany()
     * 
     * // Get first 10 Productcategories
     * const productcategories = await prisma.productcategories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productcategoriesWithIdOnly = await prisma.productcategories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productcategoriesFindManyArgs>(args?: SelectSubset<T, productcategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productcategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Productcategories.
     * @param {productcategoriesCreateArgs} args - Arguments to create a Productcategories.
     * @example
     * // Create one Productcategories
     * const Productcategories = await prisma.productcategories.create({
     *   data: {
     *     // ... data to create a Productcategories
     *   }
     * })
     * 
     */
    create<T extends productcategoriesCreateArgs>(args: SelectSubset<T, productcategoriesCreateArgs<ExtArgs>>): Prisma__productcategoriesClient<$Result.GetResult<Prisma.$productcategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productcategories.
     * @param {productcategoriesCreateManyArgs} args - Arguments to create many Productcategories.
     * @example
     * // Create many Productcategories
     * const productcategories = await prisma.productcategories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productcategoriesCreateManyArgs>(args?: SelectSubset<T, productcategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Productcategories and returns the data saved in the database.
     * @param {productcategoriesCreateManyAndReturnArgs} args - Arguments to create many Productcategories.
     * @example
     * // Create many Productcategories
     * const productcategories = await prisma.productcategories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Productcategories and only return the `id`
     * const productcategoriesWithIdOnly = await prisma.productcategories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productcategoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, productcategoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productcategoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Productcategories.
     * @param {productcategoriesDeleteArgs} args - Arguments to delete one Productcategories.
     * @example
     * // Delete one Productcategories
     * const Productcategories = await prisma.productcategories.delete({
     *   where: {
     *     // ... filter to delete one Productcategories
     *   }
     * })
     * 
     */
    delete<T extends productcategoriesDeleteArgs>(args: SelectSubset<T, productcategoriesDeleteArgs<ExtArgs>>): Prisma__productcategoriesClient<$Result.GetResult<Prisma.$productcategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Productcategories.
     * @param {productcategoriesUpdateArgs} args - Arguments to update one Productcategories.
     * @example
     * // Update one Productcategories
     * const productcategories = await prisma.productcategories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productcategoriesUpdateArgs>(args: SelectSubset<T, productcategoriesUpdateArgs<ExtArgs>>): Prisma__productcategoriesClient<$Result.GetResult<Prisma.$productcategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productcategories.
     * @param {productcategoriesDeleteManyArgs} args - Arguments to filter Productcategories to delete.
     * @example
     * // Delete a few Productcategories
     * const { count } = await prisma.productcategories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productcategoriesDeleteManyArgs>(args?: SelectSubset<T, productcategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productcategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productcategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productcategories
     * const productcategories = await prisma.productcategories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productcategoriesUpdateManyArgs>(args: SelectSubset<T, productcategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productcategories and returns the data updated in the database.
     * @param {productcategoriesUpdateManyAndReturnArgs} args - Arguments to update many Productcategories.
     * @example
     * // Update many Productcategories
     * const productcategories = await prisma.productcategories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Productcategories and only return the `id`
     * const productcategoriesWithIdOnly = await prisma.productcategories.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productcategoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, productcategoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productcategoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Productcategories.
     * @param {productcategoriesUpsertArgs} args - Arguments to update or create a Productcategories.
     * @example
     * // Update or create a Productcategories
     * const productcategories = await prisma.productcategories.upsert({
     *   create: {
     *     // ... data to create a Productcategories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Productcategories we want to update
     *   }
     * })
     */
    upsert<T extends productcategoriesUpsertArgs>(args: SelectSubset<T, productcategoriesUpsertArgs<ExtArgs>>): Prisma__productcategoriesClient<$Result.GetResult<Prisma.$productcategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productcategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productcategoriesCountArgs} args - Arguments to filter Productcategories to count.
     * @example
     * // Count the number of Productcategories
     * const count = await prisma.productcategories.count({
     *   where: {
     *     // ... the filter for the Productcategories we want to count
     *   }
     * })
    **/
    count<T extends productcategoriesCountArgs>(
      args?: Subset<T, productcategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductcategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Productcategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductcategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductcategoriesAggregateArgs>(args: Subset<T, ProductcategoriesAggregateArgs>): Prisma.PrismaPromise<GetProductcategoriesAggregateType<T>>

    /**
     * Group by Productcategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productcategoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productcategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productcategoriesGroupByArgs['orderBy'] }
        : { orderBy?: productcategoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productcategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductcategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the productcategories model
   */
  readonly fields: productcategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for productcategories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productcategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends productcategories$productsArgs<ExtArgs> = {}>(args?: Subset<T, productcategories$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the productcategories model
   */
  interface productcategoriesFieldRefs {
    readonly id: FieldRef<"productcategories", 'Int'>
    readonly name: FieldRef<"productcategories", 'String'>
    readonly slug: FieldRef<"productcategories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * productcategories findUnique
   */
  export type productcategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcategories
     */
    select?: productcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productcategories
     */
    omit?: productcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcategoriesInclude<ExtArgs> | null
    /**
     * Filter, which productcategories to fetch.
     */
    where: productcategoriesWhereUniqueInput
  }

  /**
   * productcategories findUniqueOrThrow
   */
  export type productcategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcategories
     */
    select?: productcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productcategories
     */
    omit?: productcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcategoriesInclude<ExtArgs> | null
    /**
     * Filter, which productcategories to fetch.
     */
    where: productcategoriesWhereUniqueInput
  }

  /**
   * productcategories findFirst
   */
  export type productcategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcategories
     */
    select?: productcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productcategories
     */
    omit?: productcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcategoriesInclude<ExtArgs> | null
    /**
     * Filter, which productcategories to fetch.
     */
    where?: productcategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productcategories to fetch.
     */
    orderBy?: productcategoriesOrderByWithRelationInput | productcategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productcategories.
     */
    cursor?: productcategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productcategories.
     */
    distinct?: ProductcategoriesScalarFieldEnum | ProductcategoriesScalarFieldEnum[]
  }

  /**
   * productcategories findFirstOrThrow
   */
  export type productcategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcategories
     */
    select?: productcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productcategories
     */
    omit?: productcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcategoriesInclude<ExtArgs> | null
    /**
     * Filter, which productcategories to fetch.
     */
    where?: productcategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productcategories to fetch.
     */
    orderBy?: productcategoriesOrderByWithRelationInput | productcategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productcategories.
     */
    cursor?: productcategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productcategories.
     */
    distinct?: ProductcategoriesScalarFieldEnum | ProductcategoriesScalarFieldEnum[]
  }

  /**
   * productcategories findMany
   */
  export type productcategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcategories
     */
    select?: productcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productcategories
     */
    omit?: productcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcategoriesInclude<ExtArgs> | null
    /**
     * Filter, which productcategories to fetch.
     */
    where?: productcategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productcategories to fetch.
     */
    orderBy?: productcategoriesOrderByWithRelationInput | productcategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing productcategories.
     */
    cursor?: productcategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productcategories.
     */
    skip?: number
    distinct?: ProductcategoriesScalarFieldEnum | ProductcategoriesScalarFieldEnum[]
  }

  /**
   * productcategories create
   */
  export type productcategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcategories
     */
    select?: productcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productcategories
     */
    omit?: productcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a productcategories.
     */
    data: XOR<productcategoriesCreateInput, productcategoriesUncheckedCreateInput>
  }

  /**
   * productcategories createMany
   */
  export type productcategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many productcategories.
     */
    data: productcategoriesCreateManyInput | productcategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * productcategories createManyAndReturn
   */
  export type productcategoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcategories
     */
    select?: productcategoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the productcategories
     */
    omit?: productcategoriesOmit<ExtArgs> | null
    /**
     * The data used to create many productcategories.
     */
    data: productcategoriesCreateManyInput | productcategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * productcategories update
   */
  export type productcategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcategories
     */
    select?: productcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productcategories
     */
    omit?: productcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a productcategories.
     */
    data: XOR<productcategoriesUpdateInput, productcategoriesUncheckedUpdateInput>
    /**
     * Choose, which productcategories to update.
     */
    where: productcategoriesWhereUniqueInput
  }

  /**
   * productcategories updateMany
   */
  export type productcategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update productcategories.
     */
    data: XOR<productcategoriesUpdateManyMutationInput, productcategoriesUncheckedUpdateManyInput>
    /**
     * Filter which productcategories to update
     */
    where?: productcategoriesWhereInput
    /**
     * Limit how many productcategories to update.
     */
    limit?: number
  }

  /**
   * productcategories updateManyAndReturn
   */
  export type productcategoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcategories
     */
    select?: productcategoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the productcategories
     */
    omit?: productcategoriesOmit<ExtArgs> | null
    /**
     * The data used to update productcategories.
     */
    data: XOR<productcategoriesUpdateManyMutationInput, productcategoriesUncheckedUpdateManyInput>
    /**
     * Filter which productcategories to update
     */
    where?: productcategoriesWhereInput
    /**
     * Limit how many productcategories to update.
     */
    limit?: number
  }

  /**
   * productcategories upsert
   */
  export type productcategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcategories
     */
    select?: productcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productcategories
     */
    omit?: productcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the productcategories to update in case it exists.
     */
    where: productcategoriesWhereUniqueInput
    /**
     * In case the productcategories found by the `where` argument doesn't exist, create a new productcategories with this data.
     */
    create: XOR<productcategoriesCreateInput, productcategoriesUncheckedCreateInput>
    /**
     * In case the productcategories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productcategoriesUpdateInput, productcategoriesUncheckedUpdateInput>
  }

  /**
   * productcategories delete
   */
  export type productcategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcategories
     */
    select?: productcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productcategories
     */
    omit?: productcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcategoriesInclude<ExtArgs> | null
    /**
     * Filter which productcategories to delete.
     */
    where: productcategoriesWhereUniqueInput
  }

  /**
   * productcategories deleteMany
   */
  export type productcategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productcategories to delete
     */
    where?: productcategoriesWhereInput
    /**
     * Limit how many productcategories to delete.
     */
    limit?: number
  }

  /**
   * productcategories.products
   */
  export type productcategories$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    cursor?: productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * productcategories without action
   */
  export type productcategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcategories
     */
    select?: productcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productcategories
     */
    omit?: productcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcategoriesInclude<ExtArgs> | null
  }


  /**
   * Model productcomments
   */

  export type AggregateProductcomments = {
    _count: ProductcommentsCountAggregateOutputType | null
    _avg: ProductcommentsAvgAggregateOutputType | null
    _sum: ProductcommentsSumAggregateOutputType | null
    _min: ProductcommentsMinAggregateOutputType | null
    _max: ProductcommentsMaxAggregateOutputType | null
  }

  export type ProductcommentsAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    product_id: number | null
  }

  export type ProductcommentsSumAggregateOutputType = {
    id: number | null
    rating: number | null
    product_id: number | null
  }

  export type ProductcommentsMinAggregateOutputType = {
    id: number | null
    reviewer_name: string | null
    reviewer_email: string | null
    rating: number | null
    comment: string | null
    date: Date | null
    product_id: number | null
  }

  export type ProductcommentsMaxAggregateOutputType = {
    id: number | null
    reviewer_name: string | null
    reviewer_email: string | null
    rating: number | null
    comment: string | null
    date: Date | null
    product_id: number | null
  }

  export type ProductcommentsCountAggregateOutputType = {
    id: number
    reviewer_name: number
    reviewer_email: number
    rating: number
    comment: number
    date: number
    product_id: number
    _all: number
  }


  export type ProductcommentsAvgAggregateInputType = {
    id?: true
    rating?: true
    product_id?: true
  }

  export type ProductcommentsSumAggregateInputType = {
    id?: true
    rating?: true
    product_id?: true
  }

  export type ProductcommentsMinAggregateInputType = {
    id?: true
    reviewer_name?: true
    reviewer_email?: true
    rating?: true
    comment?: true
    date?: true
    product_id?: true
  }

  export type ProductcommentsMaxAggregateInputType = {
    id?: true
    reviewer_name?: true
    reviewer_email?: true
    rating?: true
    comment?: true
    date?: true
    product_id?: true
  }

  export type ProductcommentsCountAggregateInputType = {
    id?: true
    reviewer_name?: true
    reviewer_email?: true
    rating?: true
    comment?: true
    date?: true
    product_id?: true
    _all?: true
  }

  export type ProductcommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productcomments to aggregate.
     */
    where?: productcommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productcomments to fetch.
     */
    orderBy?: productcommentsOrderByWithRelationInput | productcommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productcommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productcomments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productcomments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned productcomments
    **/
    _count?: true | ProductcommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductcommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductcommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductcommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductcommentsMaxAggregateInputType
  }

  export type GetProductcommentsAggregateType<T extends ProductcommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateProductcomments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductcomments[P]>
      : GetScalarType<T[P], AggregateProductcomments[P]>
  }




  export type productcommentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productcommentsWhereInput
    orderBy?: productcommentsOrderByWithAggregationInput | productcommentsOrderByWithAggregationInput[]
    by: ProductcommentsScalarFieldEnum[] | ProductcommentsScalarFieldEnum
    having?: productcommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductcommentsCountAggregateInputType | true
    _avg?: ProductcommentsAvgAggregateInputType
    _sum?: ProductcommentsSumAggregateInputType
    _min?: ProductcommentsMinAggregateInputType
    _max?: ProductcommentsMaxAggregateInputType
  }

  export type ProductcommentsGroupByOutputType = {
    id: number
    reviewer_name: string
    reviewer_email: string
    rating: number
    comment: string
    date: Date
    product_id: number
    _count: ProductcommentsCountAggregateOutputType | null
    _avg: ProductcommentsAvgAggregateOutputType | null
    _sum: ProductcommentsSumAggregateOutputType | null
    _min: ProductcommentsMinAggregateOutputType | null
    _max: ProductcommentsMaxAggregateOutputType | null
  }

  type GetProductcommentsGroupByPayload<T extends productcommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductcommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductcommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductcommentsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductcommentsGroupByOutputType[P]>
        }
      >
    >


  export type productcommentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewer_name?: boolean
    reviewer_email?: boolean
    rating?: boolean
    comment?: boolean
    date?: boolean
    product_id?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productcomments"]>

  export type productcommentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewer_name?: boolean
    reviewer_email?: boolean
    rating?: boolean
    comment?: boolean
    date?: boolean
    product_id?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productcomments"]>

  export type productcommentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewer_name?: boolean
    reviewer_email?: boolean
    rating?: boolean
    comment?: boolean
    date?: boolean
    product_id?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productcomments"]>

  export type productcommentsSelectScalar = {
    id?: boolean
    reviewer_name?: boolean
    reviewer_email?: boolean
    rating?: boolean
    comment?: boolean
    date?: boolean
    product_id?: boolean
  }

  export type productcommentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reviewer_name" | "reviewer_email" | "rating" | "comment" | "date" | "product_id", ExtArgs["result"]["productcomments"]>
  export type productcommentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type productcommentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type productcommentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
  }

  export type $productcommentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "productcomments"
    objects: {
      products: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reviewer_name: string
      reviewer_email: string
      rating: number
      comment: string
      date: Date
      product_id: number
    }, ExtArgs["result"]["productcomments"]>
    composites: {}
  }

  type productcommentsGetPayload<S extends boolean | null | undefined | productcommentsDefaultArgs> = $Result.GetResult<Prisma.$productcommentsPayload, S>

  type productcommentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productcommentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductcommentsCountAggregateInputType | true
    }

  export interface productcommentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['productcomments'], meta: { name: 'productcomments' } }
    /**
     * Find zero or one Productcomments that matches the filter.
     * @param {productcommentsFindUniqueArgs} args - Arguments to find a Productcomments
     * @example
     * // Get one Productcomments
     * const productcomments = await prisma.productcomments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productcommentsFindUniqueArgs>(args: SelectSubset<T, productcommentsFindUniqueArgs<ExtArgs>>): Prisma__productcommentsClient<$Result.GetResult<Prisma.$productcommentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Productcomments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productcommentsFindUniqueOrThrowArgs} args - Arguments to find a Productcomments
     * @example
     * // Get one Productcomments
     * const productcomments = await prisma.productcomments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productcommentsFindUniqueOrThrowArgs>(args: SelectSubset<T, productcommentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productcommentsClient<$Result.GetResult<Prisma.$productcommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Productcomments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productcommentsFindFirstArgs} args - Arguments to find a Productcomments
     * @example
     * // Get one Productcomments
     * const productcomments = await prisma.productcomments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productcommentsFindFirstArgs>(args?: SelectSubset<T, productcommentsFindFirstArgs<ExtArgs>>): Prisma__productcommentsClient<$Result.GetResult<Prisma.$productcommentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Productcomments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productcommentsFindFirstOrThrowArgs} args - Arguments to find a Productcomments
     * @example
     * // Get one Productcomments
     * const productcomments = await prisma.productcomments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productcommentsFindFirstOrThrowArgs>(args?: SelectSubset<T, productcommentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productcommentsClient<$Result.GetResult<Prisma.$productcommentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productcomments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productcommentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productcomments
     * const productcomments = await prisma.productcomments.findMany()
     * 
     * // Get first 10 Productcomments
     * const productcomments = await prisma.productcomments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productcommentsWithIdOnly = await prisma.productcomments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productcommentsFindManyArgs>(args?: SelectSubset<T, productcommentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productcommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Productcomments.
     * @param {productcommentsCreateArgs} args - Arguments to create a Productcomments.
     * @example
     * // Create one Productcomments
     * const Productcomments = await prisma.productcomments.create({
     *   data: {
     *     // ... data to create a Productcomments
     *   }
     * })
     * 
     */
    create<T extends productcommentsCreateArgs>(args: SelectSubset<T, productcommentsCreateArgs<ExtArgs>>): Prisma__productcommentsClient<$Result.GetResult<Prisma.$productcommentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productcomments.
     * @param {productcommentsCreateManyArgs} args - Arguments to create many Productcomments.
     * @example
     * // Create many Productcomments
     * const productcomments = await prisma.productcomments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productcommentsCreateManyArgs>(args?: SelectSubset<T, productcommentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Productcomments and returns the data saved in the database.
     * @param {productcommentsCreateManyAndReturnArgs} args - Arguments to create many Productcomments.
     * @example
     * // Create many Productcomments
     * const productcomments = await prisma.productcomments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Productcomments and only return the `id`
     * const productcommentsWithIdOnly = await prisma.productcomments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productcommentsCreateManyAndReturnArgs>(args?: SelectSubset<T, productcommentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productcommentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Productcomments.
     * @param {productcommentsDeleteArgs} args - Arguments to delete one Productcomments.
     * @example
     * // Delete one Productcomments
     * const Productcomments = await prisma.productcomments.delete({
     *   where: {
     *     // ... filter to delete one Productcomments
     *   }
     * })
     * 
     */
    delete<T extends productcommentsDeleteArgs>(args: SelectSubset<T, productcommentsDeleteArgs<ExtArgs>>): Prisma__productcommentsClient<$Result.GetResult<Prisma.$productcommentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Productcomments.
     * @param {productcommentsUpdateArgs} args - Arguments to update one Productcomments.
     * @example
     * // Update one Productcomments
     * const productcomments = await prisma.productcomments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productcommentsUpdateArgs>(args: SelectSubset<T, productcommentsUpdateArgs<ExtArgs>>): Prisma__productcommentsClient<$Result.GetResult<Prisma.$productcommentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productcomments.
     * @param {productcommentsDeleteManyArgs} args - Arguments to filter Productcomments to delete.
     * @example
     * // Delete a few Productcomments
     * const { count } = await prisma.productcomments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productcommentsDeleteManyArgs>(args?: SelectSubset<T, productcommentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productcomments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productcommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productcomments
     * const productcomments = await prisma.productcomments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productcommentsUpdateManyArgs>(args: SelectSubset<T, productcommentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productcomments and returns the data updated in the database.
     * @param {productcommentsUpdateManyAndReturnArgs} args - Arguments to update many Productcomments.
     * @example
     * // Update many Productcomments
     * const productcomments = await prisma.productcomments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Productcomments and only return the `id`
     * const productcommentsWithIdOnly = await prisma.productcomments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productcommentsUpdateManyAndReturnArgs>(args: SelectSubset<T, productcommentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productcommentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Productcomments.
     * @param {productcommentsUpsertArgs} args - Arguments to update or create a Productcomments.
     * @example
     * // Update or create a Productcomments
     * const productcomments = await prisma.productcomments.upsert({
     *   create: {
     *     // ... data to create a Productcomments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Productcomments we want to update
     *   }
     * })
     */
    upsert<T extends productcommentsUpsertArgs>(args: SelectSubset<T, productcommentsUpsertArgs<ExtArgs>>): Prisma__productcommentsClient<$Result.GetResult<Prisma.$productcommentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productcomments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productcommentsCountArgs} args - Arguments to filter Productcomments to count.
     * @example
     * // Count the number of Productcomments
     * const count = await prisma.productcomments.count({
     *   where: {
     *     // ... the filter for the Productcomments we want to count
     *   }
     * })
    **/
    count<T extends productcommentsCountArgs>(
      args?: Subset<T, productcommentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductcommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Productcomments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductcommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductcommentsAggregateArgs>(args: Subset<T, ProductcommentsAggregateArgs>): Prisma.PrismaPromise<GetProductcommentsAggregateType<T>>

    /**
     * Group by Productcomments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productcommentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productcommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productcommentsGroupByArgs['orderBy'] }
        : { orderBy?: productcommentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productcommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductcommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the productcomments model
   */
  readonly fields: productcommentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for productcomments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productcommentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the productcomments model
   */
  interface productcommentsFieldRefs {
    readonly id: FieldRef<"productcomments", 'Int'>
    readonly reviewer_name: FieldRef<"productcomments", 'String'>
    readonly reviewer_email: FieldRef<"productcomments", 'String'>
    readonly rating: FieldRef<"productcomments", 'Int'>
    readonly comment: FieldRef<"productcomments", 'String'>
    readonly date: FieldRef<"productcomments", 'DateTime'>
    readonly product_id: FieldRef<"productcomments", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * productcomments findUnique
   */
  export type productcommentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcomments
     */
    select?: productcommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productcomments
     */
    omit?: productcommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcommentsInclude<ExtArgs> | null
    /**
     * Filter, which productcomments to fetch.
     */
    where: productcommentsWhereUniqueInput
  }

  /**
   * productcomments findUniqueOrThrow
   */
  export type productcommentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcomments
     */
    select?: productcommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productcomments
     */
    omit?: productcommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcommentsInclude<ExtArgs> | null
    /**
     * Filter, which productcomments to fetch.
     */
    where: productcommentsWhereUniqueInput
  }

  /**
   * productcomments findFirst
   */
  export type productcommentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcomments
     */
    select?: productcommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productcomments
     */
    omit?: productcommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcommentsInclude<ExtArgs> | null
    /**
     * Filter, which productcomments to fetch.
     */
    where?: productcommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productcomments to fetch.
     */
    orderBy?: productcommentsOrderByWithRelationInput | productcommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productcomments.
     */
    cursor?: productcommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productcomments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productcomments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productcomments.
     */
    distinct?: ProductcommentsScalarFieldEnum | ProductcommentsScalarFieldEnum[]
  }

  /**
   * productcomments findFirstOrThrow
   */
  export type productcommentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcomments
     */
    select?: productcommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productcomments
     */
    omit?: productcommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcommentsInclude<ExtArgs> | null
    /**
     * Filter, which productcomments to fetch.
     */
    where?: productcommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productcomments to fetch.
     */
    orderBy?: productcommentsOrderByWithRelationInput | productcommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productcomments.
     */
    cursor?: productcommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productcomments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productcomments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productcomments.
     */
    distinct?: ProductcommentsScalarFieldEnum | ProductcommentsScalarFieldEnum[]
  }

  /**
   * productcomments findMany
   */
  export type productcommentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcomments
     */
    select?: productcommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productcomments
     */
    omit?: productcommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcommentsInclude<ExtArgs> | null
    /**
     * Filter, which productcomments to fetch.
     */
    where?: productcommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productcomments to fetch.
     */
    orderBy?: productcommentsOrderByWithRelationInput | productcommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing productcomments.
     */
    cursor?: productcommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productcomments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productcomments.
     */
    skip?: number
    distinct?: ProductcommentsScalarFieldEnum | ProductcommentsScalarFieldEnum[]
  }

  /**
   * productcomments create
   */
  export type productcommentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcomments
     */
    select?: productcommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productcomments
     */
    omit?: productcommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcommentsInclude<ExtArgs> | null
    /**
     * The data needed to create a productcomments.
     */
    data: XOR<productcommentsCreateInput, productcommentsUncheckedCreateInput>
  }

  /**
   * productcomments createMany
   */
  export type productcommentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many productcomments.
     */
    data: productcommentsCreateManyInput | productcommentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * productcomments createManyAndReturn
   */
  export type productcommentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcomments
     */
    select?: productcommentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the productcomments
     */
    omit?: productcommentsOmit<ExtArgs> | null
    /**
     * The data used to create many productcomments.
     */
    data: productcommentsCreateManyInput | productcommentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcommentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * productcomments update
   */
  export type productcommentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcomments
     */
    select?: productcommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productcomments
     */
    omit?: productcommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcommentsInclude<ExtArgs> | null
    /**
     * The data needed to update a productcomments.
     */
    data: XOR<productcommentsUpdateInput, productcommentsUncheckedUpdateInput>
    /**
     * Choose, which productcomments to update.
     */
    where: productcommentsWhereUniqueInput
  }

  /**
   * productcomments updateMany
   */
  export type productcommentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update productcomments.
     */
    data: XOR<productcommentsUpdateManyMutationInput, productcommentsUncheckedUpdateManyInput>
    /**
     * Filter which productcomments to update
     */
    where?: productcommentsWhereInput
    /**
     * Limit how many productcomments to update.
     */
    limit?: number
  }

  /**
   * productcomments updateManyAndReturn
   */
  export type productcommentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcomments
     */
    select?: productcommentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the productcomments
     */
    omit?: productcommentsOmit<ExtArgs> | null
    /**
     * The data used to update productcomments.
     */
    data: XOR<productcommentsUpdateManyMutationInput, productcommentsUncheckedUpdateManyInput>
    /**
     * Filter which productcomments to update
     */
    where?: productcommentsWhereInput
    /**
     * Limit how many productcomments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcommentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * productcomments upsert
   */
  export type productcommentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcomments
     */
    select?: productcommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productcomments
     */
    omit?: productcommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcommentsInclude<ExtArgs> | null
    /**
     * The filter to search for the productcomments to update in case it exists.
     */
    where: productcommentsWhereUniqueInput
    /**
     * In case the productcomments found by the `where` argument doesn't exist, create a new productcomments with this data.
     */
    create: XOR<productcommentsCreateInput, productcommentsUncheckedCreateInput>
    /**
     * In case the productcomments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productcommentsUpdateInput, productcommentsUncheckedUpdateInput>
  }

  /**
   * productcomments delete
   */
  export type productcommentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcomments
     */
    select?: productcommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productcomments
     */
    omit?: productcommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcommentsInclude<ExtArgs> | null
    /**
     * Filter which productcomments to delete.
     */
    where: productcommentsWhereUniqueInput
  }

  /**
   * productcomments deleteMany
   */
  export type productcommentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productcomments to delete
     */
    where?: productcommentsWhereInput
    /**
     * Limit how many productcomments to delete.
     */
    limit?: number
  }

  /**
   * productcomments without action
   */
  export type productcommentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcomments
     */
    select?: productcommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productcomments
     */
    omit?: productcommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcommentsInclude<ExtArgs> | null
  }


  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    stock: number | null
    rating: number | null
    category_relation_id: number | null
  }

  export type ProductsSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    stock: number | null
    rating: number | null
    category_relation_id: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    price: Decimal | null
    thumbnail: string | null
    stock: number | null
    rating: number | null
    category_relation_id: number | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    price: Decimal | null
    thumbnail: string | null
    stock: number | null
    rating: number | null
    category_relation_id: number | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    title: number
    description: number
    price: number
    thumbnail: number
    stock: number
    dimensions: number
    meta: number
    rating: number
    category_relation_id: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    id?: true
    price?: true
    stock?: true
    rating?: true
    category_relation_id?: true
  }

  export type ProductsSumAggregateInputType = {
    id?: true
    price?: true
    stock?: true
    rating?: true
    category_relation_id?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    thumbnail?: true
    stock?: true
    rating?: true
    category_relation_id?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    thumbnail?: true
    stock?: true
    rating?: true
    category_relation_id?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    thumbnail?: true
    stock?: true
    dimensions?: true
    meta?: true
    rating?: true
    category_relation_id?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: number
    title: string
    description: string
    price: Decimal
    thumbnail: string
    stock: number
    dimensions: JsonValue
    meta: JsonValue
    rating: number
    category_relation_id: number | null
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    thumbnail?: boolean
    stock?: boolean
    dimensions?: boolean
    meta?: boolean
    rating?: boolean
    category_relation_id?: boolean
    discounts?: boolean | products$discountsArgs<ExtArgs>
    productcomments?: boolean | products$productcommentsArgs<ExtArgs>
    productcategories?: boolean | products$productcategoriesArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    thumbnail?: boolean
    stock?: boolean
    dimensions?: boolean
    meta?: boolean
    rating?: boolean
    category_relation_id?: boolean
    productcategories?: boolean | products$productcategoriesArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    thumbnail?: boolean
    stock?: boolean
    dimensions?: boolean
    meta?: boolean
    rating?: boolean
    category_relation_id?: boolean
    productcategories?: boolean | products$productcategoriesArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    thumbnail?: boolean
    stock?: boolean
    dimensions?: boolean
    meta?: boolean
    rating?: boolean
    category_relation_id?: boolean
  }

  export type productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "price" | "thumbnail" | "stock" | "dimensions" | "meta" | "rating" | "category_relation_id", ExtArgs["result"]["products"]>
  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discounts?: boolean | products$discountsArgs<ExtArgs>
    productcomments?: boolean | products$productcommentsArgs<ExtArgs>
    productcategories?: boolean | products$productcategoriesArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productcategories?: boolean | products$productcategoriesArgs<ExtArgs>
  }
  export type productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productcategories?: boolean | products$productcategoriesArgs<ExtArgs>
  }

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      discounts: Prisma.$discountsPayload<ExtArgs>[]
      productcomments: Prisma.$productcommentsPayload<ExtArgs>[]
      productcategories: Prisma.$productcategoriesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      price: Prisma.Decimal
      thumbnail: string
      stock: number
      dimensions: Prisma.JsonValue
      meta: Prisma.JsonValue
      rating: number
      category_relation_id: number | null
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productsCreateManyAndReturnArgs>(args?: SelectSubset<T, productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {productsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productsUpdateManyAndReturnArgs>(args: SelectSubset<T, productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    discounts<T extends products$discountsArgs<ExtArgs> = {}>(args?: Subset<T, products$discountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$discountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    productcomments<T extends products$productcommentsArgs<ExtArgs> = {}>(args?: Subset<T, products$productcommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productcommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    productcategories<T extends products$productcategoriesArgs<ExtArgs> = {}>(args?: Subset<T, products$productcategoriesArgs<ExtArgs>>): Prisma__productcategoriesClient<$Result.GetResult<Prisma.$productcategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly id: FieldRef<"products", 'Int'>
    readonly title: FieldRef<"products", 'String'>
    readonly description: FieldRef<"products", 'String'>
    readonly price: FieldRef<"products", 'Decimal'>
    readonly thumbnail: FieldRef<"products", 'String'>
    readonly stock: FieldRef<"products", 'Int'>
    readonly dimensions: FieldRef<"products", 'Json'>
    readonly meta: FieldRef<"products", 'Json'>
    readonly rating: FieldRef<"products", 'Float'>
    readonly category_relation_id: FieldRef<"products", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products createManyAndReturn
   */
  export type productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products updateManyAndReturn
   */
  export type productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * products.discounts
   */
  export type products$discountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discounts
     */
    select?: discountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discounts
     */
    omit?: discountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: discountsInclude<ExtArgs> | null
    where?: discountsWhereInput
    orderBy?: discountsOrderByWithRelationInput | discountsOrderByWithRelationInput[]
    cursor?: discountsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscountsScalarFieldEnum | DiscountsScalarFieldEnum[]
  }

  /**
   * products.productcomments
   */
  export type products$productcommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcomments
     */
    select?: productcommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productcomments
     */
    omit?: productcommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcommentsInclude<ExtArgs> | null
    where?: productcommentsWhereInput
    orderBy?: productcommentsOrderByWithRelationInput | productcommentsOrderByWithRelationInput[]
    cursor?: productcommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductcommentsScalarFieldEnum | ProductcommentsScalarFieldEnum[]
  }

  /**
   * products.productcategories
   */
  export type products$productcategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productcategories
     */
    select?: productcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productcategories
     */
    omit?: productcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productcategoriesInclude<ExtArgs> | null
    where?: productcategoriesWhereInput
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password_hash: string | null
    first_name: string | null
    last_name: string | null
    phone: string | null
    is_verified: boolean | null
    role: string | null
    last_login_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password_hash: string | null
    first_name: string | null
    last_name: string | null
    phone: string | null
    is_verified: boolean | null
    role: string | null
    last_login_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password_hash: number
    first_name: number
    last_name: number
    phone: number
    is_verified: number
    role: number
    last_login_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password_hash?: true
    first_name?: true
    last_name?: true
    phone?: true
    is_verified?: true
    role?: true
    last_login_at?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password_hash?: true
    first_name?: true
    last_name?: true
    phone?: true
    is_verified?: true
    role?: true
    last_login_at?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password_hash?: true
    first_name?: true
    last_name?: true
    phone?: true
    is_verified?: true
    role?: true
    last_login_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string | null
    email: string
    password_hash: string
    first_name: string | null
    last_name: string | null
    phone: string | null
    is_verified: boolean
    role: string
    last_login_at: Date | null
    created_at: Date
    updated_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    is_verified?: boolean
    role?: boolean
    last_login_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    addresses?: boolean | users$addressesArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    is_verified?: boolean
    role?: boolean
    last_login_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    is_verified?: boolean
    role?: boolean
    last_login_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    is_verified?: boolean
    role?: boolean
    last_login_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password_hash" | "first_name" | "last_name" | "phone" | "is_verified" | "role" | "last_login_at" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | users$addressesArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      addresses: Prisma.$addressesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string | null
      email: string
      password_hash: string
      first_name: string | null
      last_name: string | null
      phone: string | null
      is_verified: boolean
      role: string
      last_login_at: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    addresses<T extends users$addressesArgs<ExtArgs> = {}>(args?: Subset<T, users$addressesArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly first_name: FieldRef<"users", 'String'>
    readonly last_name: FieldRef<"users", 'String'>
    readonly phone: FieldRef<"users", 'String'>
    readonly is_verified: FieldRef<"users", 'Boolean'>
    readonly role: FieldRef<"users", 'String'>
    readonly last_login_at: FieldRef<"users", 'DateTime'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.addresses
   */
  export type users$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    where?: addressesWhereInput
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model addresses
   */

  export type AggregateAddresses = {
    _count: AddressesCountAggregateOutputType | null
    _avg: AddressesAvgAggregateOutputType | null
    _sum: AddressesSumAggregateOutputType | null
    _min: AddressesMinAggregateOutputType | null
    _max: AddressesMaxAggregateOutputType | null
  }

  export type AddressesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type AddressesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type AddressesMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    label: string | null
    province: string | null
    city: string | null
    postal_code: string | null
    address_line: string | null
    is_default: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AddressesMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    label: string | null
    province: string | null
    city: string | null
    postal_code: string | null
    address_line: string | null
    is_default: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AddressesCountAggregateOutputType = {
    id: number
    user_id: number
    label: number
    province: number
    city: number
    postal_code: number
    address_line: number
    is_default: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AddressesAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type AddressesSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type AddressesMinAggregateInputType = {
    id?: true
    user_id?: true
    label?: true
    province?: true
    city?: true
    postal_code?: true
    address_line?: true
    is_default?: true
    created_at?: true
    updated_at?: true
  }

  export type AddressesMaxAggregateInputType = {
    id?: true
    user_id?: true
    label?: true
    province?: true
    city?: true
    postal_code?: true
    address_line?: true
    is_default?: true
    created_at?: true
    updated_at?: true
  }

  export type AddressesCountAggregateInputType = {
    id?: true
    user_id?: true
    label?: true
    province?: true
    city?: true
    postal_code?: true
    address_line?: true
    is_default?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AddressesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which addresses to aggregate.
     */
    where?: addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressesOrderByWithRelationInput | addressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned addresses
    **/
    _count?: true | AddressesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressesMaxAggregateInputType
  }

  export type GetAddressesAggregateType<T extends AddressesAggregateArgs> = {
        [P in keyof T & keyof AggregateAddresses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddresses[P]>
      : GetScalarType<T[P], AggregateAddresses[P]>
  }




  export type addressesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: addressesWhereInput
    orderBy?: addressesOrderByWithAggregationInput | addressesOrderByWithAggregationInput[]
    by: AddressesScalarFieldEnum[] | AddressesScalarFieldEnum
    having?: addressesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressesCountAggregateInputType | true
    _avg?: AddressesAvgAggregateInputType
    _sum?: AddressesSumAggregateInputType
    _min?: AddressesMinAggregateInputType
    _max?: AddressesMaxAggregateInputType
  }

  export type AddressesGroupByOutputType = {
    id: number
    user_id: number
    label: string | null
    province: string
    city: string
    postal_code: string
    address_line: string
    is_default: boolean
    created_at: Date
    updated_at: Date
    _count: AddressesCountAggregateOutputType | null
    _avg: AddressesAvgAggregateOutputType | null
    _sum: AddressesSumAggregateOutputType | null
    _min: AddressesMinAggregateOutputType | null
    _max: AddressesMaxAggregateOutputType | null
  }

  type GetAddressesGroupByPayload<T extends addressesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressesGroupByOutputType[P]>
            : GetScalarType<T[P], AddressesGroupByOutputType[P]>
        }
      >
    >


  export type addressesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    label?: boolean
    province?: boolean
    city?: boolean
    postal_code?: boolean
    address_line?: boolean
    is_default?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addresses"]>

  export type addressesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    label?: boolean
    province?: boolean
    city?: boolean
    postal_code?: boolean
    address_line?: boolean
    is_default?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addresses"]>

  export type addressesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    label?: boolean
    province?: boolean
    city?: boolean
    postal_code?: boolean
    address_line?: boolean
    is_default?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addresses"]>

  export type addressesSelectScalar = {
    id?: boolean
    user_id?: boolean
    label?: boolean
    province?: boolean
    city?: boolean
    postal_code?: boolean
    address_line?: boolean
    is_default?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type addressesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "label" | "province" | "city" | "postal_code" | "address_line" | "is_default" | "created_at" | "updated_at", ExtArgs["result"]["addresses"]>
  export type addressesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type addressesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type addressesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $addressesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "addresses"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      label: string | null
      province: string
      city: string
      postal_code: string
      address_line: string
      is_default: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["addresses"]>
    composites: {}
  }

  type addressesGetPayload<S extends boolean | null | undefined | addressesDefaultArgs> = $Result.GetResult<Prisma.$addressesPayload, S>

  type addressesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<addressesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressesCountAggregateInputType | true
    }

  export interface addressesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['addresses'], meta: { name: 'addresses' } }
    /**
     * Find zero or one Addresses that matches the filter.
     * @param {addressesFindUniqueArgs} args - Arguments to find a Addresses
     * @example
     * // Get one Addresses
     * const addresses = await prisma.addresses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends addressesFindUniqueArgs>(args: SelectSubset<T, addressesFindUniqueArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Addresses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {addressesFindUniqueOrThrowArgs} args - Arguments to find a Addresses
     * @example
     * // Get one Addresses
     * const addresses = await prisma.addresses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends addressesFindUniqueOrThrowArgs>(args: SelectSubset<T, addressesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesFindFirstArgs} args - Arguments to find a Addresses
     * @example
     * // Get one Addresses
     * const addresses = await prisma.addresses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends addressesFindFirstArgs>(args?: SelectSubset<T, addressesFindFirstArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Addresses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesFindFirstOrThrowArgs} args - Arguments to find a Addresses
     * @example
     * // Get one Addresses
     * const addresses = await prisma.addresses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends addressesFindFirstOrThrowArgs>(args?: SelectSubset<T, addressesFindFirstOrThrowArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.addresses.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.addresses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressesWithIdOnly = await prisma.addresses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends addressesFindManyArgs>(args?: SelectSubset<T, addressesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Addresses.
     * @param {addressesCreateArgs} args - Arguments to create a Addresses.
     * @example
     * // Create one Addresses
     * const Addresses = await prisma.addresses.create({
     *   data: {
     *     // ... data to create a Addresses
     *   }
     * })
     * 
     */
    create<T extends addressesCreateArgs>(args: SelectSubset<T, addressesCreateArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {addressesCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const addresses = await prisma.addresses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends addressesCreateManyArgs>(args?: SelectSubset<T, addressesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {addressesCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const addresses = await prisma.addresses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressesWithIdOnly = await prisma.addresses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends addressesCreateManyAndReturnArgs>(args?: SelectSubset<T, addressesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Addresses.
     * @param {addressesDeleteArgs} args - Arguments to delete one Addresses.
     * @example
     * // Delete one Addresses
     * const Addresses = await prisma.addresses.delete({
     *   where: {
     *     // ... filter to delete one Addresses
     *   }
     * })
     * 
     */
    delete<T extends addressesDeleteArgs>(args: SelectSubset<T, addressesDeleteArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Addresses.
     * @param {addressesUpdateArgs} args - Arguments to update one Addresses.
     * @example
     * // Update one Addresses
     * const addresses = await prisma.addresses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends addressesUpdateArgs>(args: SelectSubset<T, addressesUpdateArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {addressesDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.addresses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends addressesDeleteManyArgs>(args?: SelectSubset<T, addressesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const addresses = await prisma.addresses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends addressesUpdateManyArgs>(args: SelectSubset<T, addressesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {addressesUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const addresses = await prisma.addresses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressesWithIdOnly = await prisma.addresses.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends addressesUpdateManyAndReturnArgs>(args: SelectSubset<T, addressesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Addresses.
     * @param {addressesUpsertArgs} args - Arguments to update or create a Addresses.
     * @example
     * // Update or create a Addresses
     * const addresses = await prisma.addresses.upsert({
     *   create: {
     *     // ... data to create a Addresses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Addresses we want to update
     *   }
     * })
     */
    upsert<T extends addressesUpsertArgs>(args: SelectSubset<T, addressesUpsertArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.addresses.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends addressesCountArgs>(
      args?: Subset<T, addressesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressesAggregateArgs>(args: Subset<T, AddressesAggregateArgs>): Prisma.PrismaPromise<GetAddressesAggregateType<T>>

    /**
     * Group by Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends addressesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: addressesGroupByArgs['orderBy'] }
        : { orderBy?: addressesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, addressesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the addresses model
   */
  readonly fields: addressesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for addresses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__addressesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the addresses model
   */
  interface addressesFieldRefs {
    readonly id: FieldRef<"addresses", 'Int'>
    readonly user_id: FieldRef<"addresses", 'Int'>
    readonly label: FieldRef<"addresses", 'String'>
    readonly province: FieldRef<"addresses", 'String'>
    readonly city: FieldRef<"addresses", 'String'>
    readonly postal_code: FieldRef<"addresses", 'String'>
    readonly address_line: FieldRef<"addresses", 'String'>
    readonly is_default: FieldRef<"addresses", 'Boolean'>
    readonly created_at: FieldRef<"addresses", 'DateTime'>
    readonly updated_at: FieldRef<"addresses", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * addresses findUnique
   */
  export type addressesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where: addressesWhereUniqueInput
  }

  /**
   * addresses findUniqueOrThrow
   */
  export type addressesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where: addressesWhereUniqueInput
  }

  /**
   * addresses findFirst
   */
  export type addressesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where?: addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressesOrderByWithRelationInput | addressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addresses.
     */
    cursor?: addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addresses.
     */
    distinct?: AddressesScalarFieldEnum | AddressesScalarFieldEnum[]
  }

  /**
   * addresses findFirstOrThrow
   */
  export type addressesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where?: addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressesOrderByWithRelationInput | addressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addresses.
     */
    cursor?: addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addresses.
     */
    distinct?: AddressesScalarFieldEnum | AddressesScalarFieldEnum[]
  }

  /**
   * addresses findMany
   */
  export type addressesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where?: addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressesOrderByWithRelationInput | addressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing addresses.
     */
    cursor?: addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    distinct?: AddressesScalarFieldEnum | AddressesScalarFieldEnum[]
  }

  /**
   * addresses create
   */
  export type addressesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * The data needed to create a addresses.
     */
    data: XOR<addressesCreateInput, addressesUncheckedCreateInput>
  }

  /**
   * addresses createMany
   */
  export type addressesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many addresses.
     */
    data: addressesCreateManyInput | addressesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * addresses createManyAndReturn
   */
  export type addressesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * The data used to create many addresses.
     */
    data: addressesCreateManyInput | addressesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * addresses update
   */
  export type addressesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * The data needed to update a addresses.
     */
    data: XOR<addressesUpdateInput, addressesUncheckedUpdateInput>
    /**
     * Choose, which addresses to update.
     */
    where: addressesWhereUniqueInput
  }

  /**
   * addresses updateMany
   */
  export type addressesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update addresses.
     */
    data: XOR<addressesUpdateManyMutationInput, addressesUncheckedUpdateManyInput>
    /**
     * Filter which addresses to update
     */
    where?: addressesWhereInput
    /**
     * Limit how many addresses to update.
     */
    limit?: number
  }

  /**
   * addresses updateManyAndReturn
   */
  export type addressesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * The data used to update addresses.
     */
    data: XOR<addressesUpdateManyMutationInput, addressesUncheckedUpdateManyInput>
    /**
     * Filter which addresses to update
     */
    where?: addressesWhereInput
    /**
     * Limit how many addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * addresses upsert
   */
  export type addressesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * The filter to search for the addresses to update in case it exists.
     */
    where: addressesWhereUniqueInput
    /**
     * In case the addresses found by the `where` argument doesn't exist, create a new addresses with this data.
     */
    create: XOR<addressesCreateInput, addressesUncheckedCreateInput>
    /**
     * In case the addresses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<addressesUpdateInput, addressesUncheckedUpdateInput>
  }

  /**
   * addresses delete
   */
  export type addressesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter which addresses to delete.
     */
    where: addressesWhereUniqueInput
  }

  /**
   * addresses deleteMany
   */
  export type addressesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which addresses to delete
     */
    where?: addressesWhereInput
    /**
     * Limit how many addresses to delete.
     */
    limit?: number
  }

  /**
   * addresses without action
   */
  export type addressesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DiscountsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    percent: 'percent',
    start_date: 'start_date',
    end_date: 'end_date',
    is_active: 'is_active',
    product_id: 'product_id'
  };

  export type DiscountsScalarFieldEnum = (typeof DiscountsScalarFieldEnum)[keyof typeof DiscountsScalarFieldEnum]


  export const ProductcategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug'
  };

  export type ProductcategoriesScalarFieldEnum = (typeof ProductcategoriesScalarFieldEnum)[keyof typeof ProductcategoriesScalarFieldEnum]


  export const ProductcommentsScalarFieldEnum: {
    id: 'id',
    reviewer_name: 'reviewer_name',
    reviewer_email: 'reviewer_email',
    rating: 'rating',
    comment: 'comment',
    date: 'date',
    product_id: 'product_id'
  };

  export type ProductcommentsScalarFieldEnum = (typeof ProductcommentsScalarFieldEnum)[keyof typeof ProductcommentsScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    price: 'price',
    thumbnail: 'thumbnail',
    stock: 'stock',
    dimensions: 'dimensions',
    meta: 'meta',
    rating: 'rating',
    category_relation_id: 'category_relation_id'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password_hash: 'password_hash',
    first_name: 'first_name',
    last_name: 'last_name',
    phone: 'phone',
    is_verified: 'is_verified',
    role: 'role',
    last_login_at: 'last_login_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const AddressesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    label: 'label',
    province: 'province',
    city: 'city',
    postal_code: 'postal_code',
    address_line: 'address_line',
    is_default: 'is_default',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AddressesScalarFieldEnum = (typeof AddressesScalarFieldEnum)[keyof typeof AddressesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type discountsWhereInput = {
    AND?: discountsWhereInput | discountsWhereInput[]
    OR?: discountsWhereInput[]
    NOT?: discountsWhereInput | discountsWhereInput[]
    id?: IntFilter<"discounts"> | number
    title?: StringFilter<"discounts"> | string
    percent?: IntFilter<"discounts"> | number
    start_date?: DateTimeFilter<"discounts"> | Date | string
    end_date?: DateTimeFilter<"discounts"> | Date | string
    is_active?: BoolFilter<"discounts"> | boolean
    product_id?: IntFilter<"discounts"> | number
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }

  export type discountsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    percent?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    is_active?: SortOrder
    product_id?: SortOrder
    products?: productsOrderByWithRelationInput
  }

  export type discountsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: discountsWhereInput | discountsWhereInput[]
    OR?: discountsWhereInput[]
    NOT?: discountsWhereInput | discountsWhereInput[]
    title?: StringFilter<"discounts"> | string
    percent?: IntFilter<"discounts"> | number
    start_date?: DateTimeFilter<"discounts"> | Date | string
    end_date?: DateTimeFilter<"discounts"> | Date | string
    is_active?: BoolFilter<"discounts"> | boolean
    product_id?: IntFilter<"discounts"> | number
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }, "id">

  export type discountsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    percent?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    is_active?: SortOrder
    product_id?: SortOrder
    _count?: discountsCountOrderByAggregateInput
    _avg?: discountsAvgOrderByAggregateInput
    _max?: discountsMaxOrderByAggregateInput
    _min?: discountsMinOrderByAggregateInput
    _sum?: discountsSumOrderByAggregateInput
  }

  export type discountsScalarWhereWithAggregatesInput = {
    AND?: discountsScalarWhereWithAggregatesInput | discountsScalarWhereWithAggregatesInput[]
    OR?: discountsScalarWhereWithAggregatesInput[]
    NOT?: discountsScalarWhereWithAggregatesInput | discountsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"discounts"> | number
    title?: StringWithAggregatesFilter<"discounts"> | string
    percent?: IntWithAggregatesFilter<"discounts"> | number
    start_date?: DateTimeWithAggregatesFilter<"discounts"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"discounts"> | Date | string
    is_active?: BoolWithAggregatesFilter<"discounts"> | boolean
    product_id?: IntWithAggregatesFilter<"discounts"> | number
  }

  export type productcategoriesWhereInput = {
    AND?: productcategoriesWhereInput | productcategoriesWhereInput[]
    OR?: productcategoriesWhereInput[]
    NOT?: productcategoriesWhereInput | productcategoriesWhereInput[]
    id?: IntFilter<"productcategories"> | number
    name?: StringFilter<"productcategories"> | string
    slug?: StringFilter<"productcategories"> | string
    products?: ProductsListRelationFilter
  }

  export type productcategoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    products?: productsOrderByRelationAggregateInput
  }

  export type productcategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    slug?: string
    AND?: productcategoriesWhereInput | productcategoriesWhereInput[]
    OR?: productcategoriesWhereInput[]
    NOT?: productcategoriesWhereInput | productcategoriesWhereInput[]
    products?: ProductsListRelationFilter
  }, "id" | "name" | "slug">

  export type productcategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    _count?: productcategoriesCountOrderByAggregateInput
    _avg?: productcategoriesAvgOrderByAggregateInput
    _max?: productcategoriesMaxOrderByAggregateInput
    _min?: productcategoriesMinOrderByAggregateInput
    _sum?: productcategoriesSumOrderByAggregateInput
  }

  export type productcategoriesScalarWhereWithAggregatesInput = {
    AND?: productcategoriesScalarWhereWithAggregatesInput | productcategoriesScalarWhereWithAggregatesInput[]
    OR?: productcategoriesScalarWhereWithAggregatesInput[]
    NOT?: productcategoriesScalarWhereWithAggregatesInput | productcategoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"productcategories"> | number
    name?: StringWithAggregatesFilter<"productcategories"> | string
    slug?: StringWithAggregatesFilter<"productcategories"> | string
  }

  export type productcommentsWhereInput = {
    AND?: productcommentsWhereInput | productcommentsWhereInput[]
    OR?: productcommentsWhereInput[]
    NOT?: productcommentsWhereInput | productcommentsWhereInput[]
    id?: IntFilter<"productcomments"> | number
    reviewer_name?: StringFilter<"productcomments"> | string
    reviewer_email?: StringFilter<"productcomments"> | string
    rating?: IntFilter<"productcomments"> | number
    comment?: StringFilter<"productcomments"> | string
    date?: DateTimeFilter<"productcomments"> | Date | string
    product_id?: IntFilter<"productcomments"> | number
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }

  export type productcommentsOrderByWithRelationInput = {
    id?: SortOrder
    reviewer_name?: SortOrder
    reviewer_email?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    date?: SortOrder
    product_id?: SortOrder
    products?: productsOrderByWithRelationInput
  }

  export type productcommentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: productcommentsWhereInput | productcommentsWhereInput[]
    OR?: productcommentsWhereInput[]
    NOT?: productcommentsWhereInput | productcommentsWhereInput[]
    reviewer_name?: StringFilter<"productcomments"> | string
    reviewer_email?: StringFilter<"productcomments"> | string
    rating?: IntFilter<"productcomments"> | number
    comment?: StringFilter<"productcomments"> | string
    date?: DateTimeFilter<"productcomments"> | Date | string
    product_id?: IntFilter<"productcomments"> | number
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }, "id">

  export type productcommentsOrderByWithAggregationInput = {
    id?: SortOrder
    reviewer_name?: SortOrder
    reviewer_email?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    date?: SortOrder
    product_id?: SortOrder
    _count?: productcommentsCountOrderByAggregateInput
    _avg?: productcommentsAvgOrderByAggregateInput
    _max?: productcommentsMaxOrderByAggregateInput
    _min?: productcommentsMinOrderByAggregateInput
    _sum?: productcommentsSumOrderByAggregateInput
  }

  export type productcommentsScalarWhereWithAggregatesInput = {
    AND?: productcommentsScalarWhereWithAggregatesInput | productcommentsScalarWhereWithAggregatesInput[]
    OR?: productcommentsScalarWhereWithAggregatesInput[]
    NOT?: productcommentsScalarWhereWithAggregatesInput | productcommentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"productcomments"> | number
    reviewer_name?: StringWithAggregatesFilter<"productcomments"> | string
    reviewer_email?: StringWithAggregatesFilter<"productcomments"> | string
    rating?: IntWithAggregatesFilter<"productcomments"> | number
    comment?: StringWithAggregatesFilter<"productcomments"> | string
    date?: DateTimeWithAggregatesFilter<"productcomments"> | Date | string
    product_id?: IntWithAggregatesFilter<"productcomments"> | number
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    id?: IntFilter<"products"> | number
    title?: StringFilter<"products"> | string
    description?: StringFilter<"products"> | string
    price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    thumbnail?: StringFilter<"products"> | string
    stock?: IntFilter<"products"> | number
    dimensions?: JsonFilter<"products">
    meta?: JsonFilter<"products">
    rating?: FloatFilter<"products"> | number
    category_relation_id?: IntNullableFilter<"products"> | number | null
    discounts?: DiscountsListRelationFilter
    productcomments?: ProductcommentsListRelationFilter
    productcategories?: XOR<ProductcategoriesNullableScalarRelationFilter, productcategoriesWhereInput> | null
  }

  export type productsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    thumbnail?: SortOrder
    stock?: SortOrder
    dimensions?: SortOrder
    meta?: SortOrder
    rating?: SortOrder
    category_relation_id?: SortOrderInput | SortOrder
    discounts?: discountsOrderByRelationAggregateInput
    productcomments?: productcommentsOrderByRelationAggregateInput
    productcategories?: productcategoriesOrderByWithRelationInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    title?: StringFilter<"products"> | string
    description?: StringFilter<"products"> | string
    price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    thumbnail?: StringFilter<"products"> | string
    stock?: IntFilter<"products"> | number
    dimensions?: JsonFilter<"products">
    meta?: JsonFilter<"products">
    rating?: FloatFilter<"products"> | number
    category_relation_id?: IntNullableFilter<"products"> | number | null
    discounts?: DiscountsListRelationFilter
    productcomments?: ProductcommentsListRelationFilter
    productcategories?: XOR<ProductcategoriesNullableScalarRelationFilter, productcategoriesWhereInput> | null
  }, "id">

  export type productsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    thumbnail?: SortOrder
    stock?: SortOrder
    dimensions?: SortOrder
    meta?: SortOrder
    rating?: SortOrder
    category_relation_id?: SortOrderInput | SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"products"> | number
    title?: StringWithAggregatesFilter<"products"> | string
    description?: StringWithAggregatesFilter<"products"> | string
    price?: DecimalWithAggregatesFilter<"products"> | Decimal | DecimalJsLike | number | string
    thumbnail?: StringWithAggregatesFilter<"products"> | string
    stock?: IntWithAggregatesFilter<"products"> | number
    dimensions?: JsonWithAggregatesFilter<"products">
    meta?: JsonWithAggregatesFilter<"products">
    rating?: FloatWithAggregatesFilter<"products"> | number
    category_relation_id?: IntNullableWithAggregatesFilter<"products"> | number | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringNullableFilter<"users"> | string | null
    email?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    first_name?: StringNullableFilter<"users"> | string | null
    last_name?: StringNullableFilter<"users"> | string | null
    phone?: StringNullableFilter<"users"> | string | null
    is_verified?: BoolFilter<"users"> | boolean
    role?: StringFilter<"users"> | string
    last_login_at?: DateTimeNullableFilter<"users"> | Date | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    addresses?: XOR<AddressesNullableScalarRelationFilter, addressesWhereInput> | null
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    is_verified?: SortOrder
    role?: SortOrder
    last_login_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    addresses?: addressesOrderByWithRelationInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password_hash?: StringFilter<"users"> | string
    first_name?: StringNullableFilter<"users"> | string | null
    last_name?: StringNullableFilter<"users"> | string | null
    phone?: StringNullableFilter<"users"> | string | null
    is_verified?: BoolFilter<"users"> | boolean
    role?: StringFilter<"users"> | string
    last_login_at?: DateTimeNullableFilter<"users"> | Date | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    addresses?: XOR<AddressesNullableScalarRelationFilter, addressesWhereInput> | null
  }, "id" | "username" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    is_verified?: SortOrder
    role?: SortOrder
    last_login_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    username?: StringNullableWithAggregatesFilter<"users"> | string | null
    email?: StringWithAggregatesFilter<"users"> | string
    password_hash?: StringWithAggregatesFilter<"users"> | string
    first_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    phone?: StringNullableWithAggregatesFilter<"users"> | string | null
    is_verified?: BoolWithAggregatesFilter<"users"> | boolean
    role?: StringWithAggregatesFilter<"users"> | string
    last_login_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type addressesWhereInput = {
    AND?: addressesWhereInput | addressesWhereInput[]
    OR?: addressesWhereInput[]
    NOT?: addressesWhereInput | addressesWhereInput[]
    id?: IntFilter<"addresses"> | number
    user_id?: IntFilter<"addresses"> | number
    label?: StringNullableFilter<"addresses"> | string | null
    province?: StringFilter<"addresses"> | string
    city?: StringFilter<"addresses"> | string
    postal_code?: StringFilter<"addresses"> | string
    address_line?: StringFilter<"addresses"> | string
    is_default?: BoolFilter<"addresses"> | boolean
    created_at?: DateTimeFilter<"addresses"> | Date | string
    updated_at?: DateTimeFilter<"addresses"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type addressesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    label?: SortOrderInput | SortOrder
    province?: SortOrder
    city?: SortOrder
    postal_code?: SortOrder
    address_line?: SortOrder
    is_default?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type addressesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: number
    AND?: addressesWhereInput | addressesWhereInput[]
    OR?: addressesWhereInput[]
    NOT?: addressesWhereInput | addressesWhereInput[]
    label?: StringNullableFilter<"addresses"> | string | null
    province?: StringFilter<"addresses"> | string
    city?: StringFilter<"addresses"> | string
    postal_code?: StringFilter<"addresses"> | string
    address_line?: StringFilter<"addresses"> | string
    is_default?: BoolFilter<"addresses"> | boolean
    created_at?: DateTimeFilter<"addresses"> | Date | string
    updated_at?: DateTimeFilter<"addresses"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "user_id">

  export type addressesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    label?: SortOrderInput | SortOrder
    province?: SortOrder
    city?: SortOrder
    postal_code?: SortOrder
    address_line?: SortOrder
    is_default?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: addressesCountOrderByAggregateInput
    _avg?: addressesAvgOrderByAggregateInput
    _max?: addressesMaxOrderByAggregateInput
    _min?: addressesMinOrderByAggregateInput
    _sum?: addressesSumOrderByAggregateInput
  }

  export type addressesScalarWhereWithAggregatesInput = {
    AND?: addressesScalarWhereWithAggregatesInput | addressesScalarWhereWithAggregatesInput[]
    OR?: addressesScalarWhereWithAggregatesInput[]
    NOT?: addressesScalarWhereWithAggregatesInput | addressesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"addresses"> | number
    user_id?: IntWithAggregatesFilter<"addresses"> | number
    label?: StringNullableWithAggregatesFilter<"addresses"> | string | null
    province?: StringWithAggregatesFilter<"addresses"> | string
    city?: StringWithAggregatesFilter<"addresses"> | string
    postal_code?: StringWithAggregatesFilter<"addresses"> | string
    address_line?: StringWithAggregatesFilter<"addresses"> | string
    is_default?: BoolWithAggregatesFilter<"addresses"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"addresses"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"addresses"> | Date | string
  }

  export type discountsCreateInput = {
    title: string
    percent: number
    start_date: Date | string
    end_date: Date | string
    is_active: boolean
    products: productsCreateNestedOneWithoutDiscountsInput
  }

  export type discountsUncheckedCreateInput = {
    id?: number
    title: string
    percent: number
    start_date: Date | string
    end_date: Date | string
    is_active: boolean
    product_id: number
  }

  export type discountsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    products?: productsUpdateOneRequiredWithoutDiscountsNestedInput
  }

  export type discountsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    product_id?: IntFieldUpdateOperationsInput | number
  }

  export type discountsCreateManyInput = {
    id?: number
    title: string
    percent: number
    start_date: Date | string
    end_date: Date | string
    is_active: boolean
    product_id: number
  }

  export type discountsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type discountsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    product_id?: IntFieldUpdateOperationsInput | number
  }

  export type productcategoriesCreateInput = {
    name: string
    slug: string
    products?: productsCreateNestedManyWithoutProductcategoriesInput
  }

  export type productcategoriesUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    products?: productsUncheckedCreateNestedManyWithoutProductcategoriesInput
  }

  export type productcategoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    products?: productsUpdateManyWithoutProductcategoriesNestedInput
  }

  export type productcategoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    products?: productsUncheckedUpdateManyWithoutProductcategoriesNestedInput
  }

  export type productcategoriesCreateManyInput = {
    id?: number
    name: string
    slug: string
  }

  export type productcategoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type productcategoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type productcommentsCreateInput = {
    reviewer_name: string
    reviewer_email: string
    rating: number
    comment: string
    date: Date | string
    products: productsCreateNestedOneWithoutProductcommentsInput
  }

  export type productcommentsUncheckedCreateInput = {
    id?: number
    reviewer_name: string
    reviewer_email: string
    rating: number
    comment: string
    date: Date | string
    product_id: number
  }

  export type productcommentsUpdateInput = {
    reviewer_name?: StringFieldUpdateOperationsInput | string
    reviewer_email?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: productsUpdateOneRequiredWithoutProductcommentsNestedInput
  }

  export type productcommentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewer_name?: StringFieldUpdateOperationsInput | string
    reviewer_email?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    product_id?: IntFieldUpdateOperationsInput | number
  }

  export type productcommentsCreateManyInput = {
    id?: number
    reviewer_name: string
    reviewer_email: string
    rating: number
    comment: string
    date: Date | string
    product_id: number
  }

  export type productcommentsUpdateManyMutationInput = {
    reviewer_name?: StringFieldUpdateOperationsInput | string
    reviewer_email?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productcommentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewer_name?: StringFieldUpdateOperationsInput | string
    reviewer_email?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    product_id?: IntFieldUpdateOperationsInput | number
  }

  export type productsCreateInput = {
    title: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    thumbnail: string
    stock: number
    dimensions: JsonNullValueInput | InputJsonValue
    meta: JsonNullValueInput | InputJsonValue
    rating: number
    discounts?: discountsCreateNestedManyWithoutProductsInput
    productcomments?: productcommentsCreateNestedManyWithoutProductsInput
    productcategories?: productcategoriesCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    thumbnail: string
    stock: number
    dimensions: JsonNullValueInput | InputJsonValue
    meta: JsonNullValueInput | InputJsonValue
    rating: number
    category_relation_id?: number | null
    discounts?: discountsUncheckedCreateNestedManyWithoutProductsInput
    productcomments?: productcommentsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    dimensions?: JsonNullValueInput | InputJsonValue
    meta?: JsonNullValueInput | InputJsonValue
    rating?: FloatFieldUpdateOperationsInput | number
    discounts?: discountsUpdateManyWithoutProductsNestedInput
    productcomments?: productcommentsUpdateManyWithoutProductsNestedInput
    productcategories?: productcategoriesUpdateOneWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    dimensions?: JsonNullValueInput | InputJsonValue
    meta?: JsonNullValueInput | InputJsonValue
    rating?: FloatFieldUpdateOperationsInput | number
    category_relation_id?: NullableIntFieldUpdateOperationsInput | number | null
    discounts?: discountsUncheckedUpdateManyWithoutProductsNestedInput
    productcomments?: productcommentsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsCreateManyInput = {
    id?: number
    title: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    thumbnail: string
    stock: number
    dimensions: JsonNullValueInput | InputJsonValue
    meta: JsonNullValueInput | InputJsonValue
    rating: number
    category_relation_id?: number | null
  }

  export type productsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    dimensions?: JsonNullValueInput | InputJsonValue
    meta?: JsonNullValueInput | InputJsonValue
    rating?: FloatFieldUpdateOperationsInput | number
  }

  export type productsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    dimensions?: JsonNullValueInput | InputJsonValue
    meta?: JsonNullValueInput | InputJsonValue
    rating?: FloatFieldUpdateOperationsInput | number
    category_relation_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersCreateInput = {
    username?: string | null
    email: string
    password_hash: string
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    is_verified?: boolean
    role?: string
    last_login_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    addresses?: addressesCreateNestedOneWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    username?: string | null
    email: string
    password_hash: string
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    is_verified?: boolean
    role?: string
    last_login_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    addresses?: addressesUncheckedCreateNestedOneWithoutUserInput
  }

  export type usersUpdateInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: addressesUpdateOneWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: addressesUncheckedUpdateOneWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    username?: string | null
    email: string
    password_hash: string
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    is_verified?: boolean
    role?: string
    last_login_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type addressesCreateInput = {
    label?: string | null
    province: string
    city: string
    postal_code: string
    address_line: string
    is_default?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: usersCreateNestedOneWithoutAddressesInput
  }

  export type addressesUncheckedCreateInput = {
    id?: number
    user_id: number
    label?: string | null
    province: string
    city: string
    postal_code: string
    address_line: string
    is_default?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type addressesUpdateInput = {
    label?: NullableStringFieldUpdateOperationsInput | string | null
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    address_line?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutAddressesNestedInput
  }

  export type addressesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    label?: NullableStringFieldUpdateOperationsInput | string | null
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    address_line?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type addressesCreateManyInput = {
    id?: number
    user_id: number
    label?: string | null
    province: string
    city: string
    postal_code: string
    address_line: string
    is_default?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type addressesUpdateManyMutationInput = {
    label?: NullableStringFieldUpdateOperationsInput | string | null
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    address_line?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type addressesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    label?: NullableStringFieldUpdateOperationsInput | string | null
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    address_line?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProductsScalarRelationFilter = {
    is?: productsWhereInput
    isNot?: productsWhereInput
  }

  export type discountsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    percent?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    is_active?: SortOrder
    product_id?: SortOrder
  }

  export type discountsAvgOrderByAggregateInput = {
    id?: SortOrder
    percent?: SortOrder
    product_id?: SortOrder
  }

  export type discountsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    percent?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    is_active?: SortOrder
    product_id?: SortOrder
  }

  export type discountsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    percent?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    is_active?: SortOrder
    product_id?: SortOrder
  }

  export type discountsSumOrderByAggregateInput = {
    id?: SortOrder
    percent?: SortOrder
    product_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProductsListRelationFilter = {
    every?: productsWhereInput
    some?: productsWhereInput
    none?: productsWhereInput
  }

  export type productsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productcategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type productcategoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type productcategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type productcategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type productcategoriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type productcommentsCountOrderByAggregateInput = {
    id?: SortOrder
    reviewer_name?: SortOrder
    reviewer_email?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    date?: SortOrder
    product_id?: SortOrder
  }

  export type productcommentsAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    product_id?: SortOrder
  }

  export type productcommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    reviewer_name?: SortOrder
    reviewer_email?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    date?: SortOrder
    product_id?: SortOrder
  }

  export type productcommentsMinOrderByAggregateInput = {
    id?: SortOrder
    reviewer_name?: SortOrder
    reviewer_email?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    date?: SortOrder
    product_id?: SortOrder
  }

  export type productcommentsSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    product_id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DiscountsListRelationFilter = {
    every?: discountsWhereInput
    some?: discountsWhereInput
    none?: discountsWhereInput
  }

  export type ProductcommentsListRelationFilter = {
    every?: productcommentsWhereInput
    some?: productcommentsWhereInput
    none?: productcommentsWhereInput
  }

  export type ProductcategoriesNullableScalarRelationFilter = {
    is?: productcategoriesWhereInput | null
    isNot?: productcategoriesWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type discountsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productcommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    thumbnail?: SortOrder
    stock?: SortOrder
    dimensions?: SortOrder
    meta?: SortOrder
    rating?: SortOrder
    category_relation_id?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    rating?: SortOrder
    category_relation_id?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    thumbnail?: SortOrder
    stock?: SortOrder
    rating?: SortOrder
    category_relation_id?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    thumbnail?: SortOrder
    stock?: SortOrder
    rating?: SortOrder
    category_relation_id?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    rating?: SortOrder
    category_relation_id?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AddressesNullableScalarRelationFilter = {
    is?: addressesWhereInput | null
    isNot?: addressesWhereInput | null
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    is_verified?: SortOrder
    role?: SortOrder
    last_login_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    is_verified?: SortOrder
    role?: SortOrder
    last_login_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    is_verified?: SortOrder
    role?: SortOrder
    last_login_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type addressesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    label?: SortOrder
    province?: SortOrder
    city?: SortOrder
    postal_code?: SortOrder
    address_line?: SortOrder
    is_default?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type addressesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type addressesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    label?: SortOrder
    province?: SortOrder
    city?: SortOrder
    postal_code?: SortOrder
    address_line?: SortOrder
    is_default?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type addressesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    label?: SortOrder
    province?: SortOrder
    city?: SortOrder
    postal_code?: SortOrder
    address_line?: SortOrder
    is_default?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type addressesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type productsCreateNestedOneWithoutDiscountsInput = {
    create?: XOR<productsCreateWithoutDiscountsInput, productsUncheckedCreateWithoutDiscountsInput>
    connectOrCreate?: productsCreateOrConnectWithoutDiscountsInput
    connect?: productsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type productsUpdateOneRequiredWithoutDiscountsNestedInput = {
    create?: XOR<productsCreateWithoutDiscountsInput, productsUncheckedCreateWithoutDiscountsInput>
    connectOrCreate?: productsCreateOrConnectWithoutDiscountsInput
    upsert?: productsUpsertWithoutDiscountsInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutDiscountsInput, productsUpdateWithoutDiscountsInput>, productsUncheckedUpdateWithoutDiscountsInput>
  }

  export type productsCreateNestedManyWithoutProductcategoriesInput = {
    create?: XOR<productsCreateWithoutProductcategoriesInput, productsUncheckedCreateWithoutProductcategoriesInput> | productsCreateWithoutProductcategoriesInput[] | productsUncheckedCreateWithoutProductcategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutProductcategoriesInput | productsCreateOrConnectWithoutProductcategoriesInput[]
    createMany?: productsCreateManyProductcategoriesInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type productsUncheckedCreateNestedManyWithoutProductcategoriesInput = {
    create?: XOR<productsCreateWithoutProductcategoriesInput, productsUncheckedCreateWithoutProductcategoriesInput> | productsCreateWithoutProductcategoriesInput[] | productsUncheckedCreateWithoutProductcategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutProductcategoriesInput | productsCreateOrConnectWithoutProductcategoriesInput[]
    createMany?: productsCreateManyProductcategoriesInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type productsUpdateManyWithoutProductcategoriesNestedInput = {
    create?: XOR<productsCreateWithoutProductcategoriesInput, productsUncheckedCreateWithoutProductcategoriesInput> | productsCreateWithoutProductcategoriesInput[] | productsUncheckedCreateWithoutProductcategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutProductcategoriesInput | productsCreateOrConnectWithoutProductcategoriesInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutProductcategoriesInput | productsUpsertWithWhereUniqueWithoutProductcategoriesInput[]
    createMany?: productsCreateManyProductcategoriesInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutProductcategoriesInput | productsUpdateWithWhereUniqueWithoutProductcategoriesInput[]
    updateMany?: productsUpdateManyWithWhereWithoutProductcategoriesInput | productsUpdateManyWithWhereWithoutProductcategoriesInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type productsUncheckedUpdateManyWithoutProductcategoriesNestedInput = {
    create?: XOR<productsCreateWithoutProductcategoriesInput, productsUncheckedCreateWithoutProductcategoriesInput> | productsCreateWithoutProductcategoriesInput[] | productsUncheckedCreateWithoutProductcategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutProductcategoriesInput | productsCreateOrConnectWithoutProductcategoriesInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutProductcategoriesInput | productsUpsertWithWhereUniqueWithoutProductcategoriesInput[]
    createMany?: productsCreateManyProductcategoriesInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutProductcategoriesInput | productsUpdateWithWhereUniqueWithoutProductcategoriesInput[]
    updateMany?: productsUpdateManyWithWhereWithoutProductcategoriesInput | productsUpdateManyWithWhereWithoutProductcategoriesInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type productsCreateNestedOneWithoutProductcommentsInput = {
    create?: XOR<productsCreateWithoutProductcommentsInput, productsUncheckedCreateWithoutProductcommentsInput>
    connectOrCreate?: productsCreateOrConnectWithoutProductcommentsInput
    connect?: productsWhereUniqueInput
  }

  export type productsUpdateOneRequiredWithoutProductcommentsNestedInput = {
    create?: XOR<productsCreateWithoutProductcommentsInput, productsUncheckedCreateWithoutProductcommentsInput>
    connectOrCreate?: productsCreateOrConnectWithoutProductcommentsInput
    upsert?: productsUpsertWithoutProductcommentsInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutProductcommentsInput, productsUpdateWithoutProductcommentsInput>, productsUncheckedUpdateWithoutProductcommentsInput>
  }

  export type discountsCreateNestedManyWithoutProductsInput = {
    create?: XOR<discountsCreateWithoutProductsInput, discountsUncheckedCreateWithoutProductsInput> | discountsCreateWithoutProductsInput[] | discountsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: discountsCreateOrConnectWithoutProductsInput | discountsCreateOrConnectWithoutProductsInput[]
    createMany?: discountsCreateManyProductsInputEnvelope
    connect?: discountsWhereUniqueInput | discountsWhereUniqueInput[]
  }

  export type productcommentsCreateNestedManyWithoutProductsInput = {
    create?: XOR<productcommentsCreateWithoutProductsInput, productcommentsUncheckedCreateWithoutProductsInput> | productcommentsCreateWithoutProductsInput[] | productcommentsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: productcommentsCreateOrConnectWithoutProductsInput | productcommentsCreateOrConnectWithoutProductsInput[]
    createMany?: productcommentsCreateManyProductsInputEnvelope
    connect?: productcommentsWhereUniqueInput | productcommentsWhereUniqueInput[]
  }

  export type productcategoriesCreateNestedOneWithoutProductsInput = {
    create?: XOR<productcategoriesCreateWithoutProductsInput, productcategoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: productcategoriesCreateOrConnectWithoutProductsInput
    connect?: productcategoriesWhereUniqueInput
  }

  export type discountsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<discountsCreateWithoutProductsInput, discountsUncheckedCreateWithoutProductsInput> | discountsCreateWithoutProductsInput[] | discountsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: discountsCreateOrConnectWithoutProductsInput | discountsCreateOrConnectWithoutProductsInput[]
    createMany?: discountsCreateManyProductsInputEnvelope
    connect?: discountsWhereUniqueInput | discountsWhereUniqueInput[]
  }

  export type productcommentsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<productcommentsCreateWithoutProductsInput, productcommentsUncheckedCreateWithoutProductsInput> | productcommentsCreateWithoutProductsInput[] | productcommentsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: productcommentsCreateOrConnectWithoutProductsInput | productcommentsCreateOrConnectWithoutProductsInput[]
    createMany?: productcommentsCreateManyProductsInputEnvelope
    connect?: productcommentsWhereUniqueInput | productcommentsWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type discountsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<discountsCreateWithoutProductsInput, discountsUncheckedCreateWithoutProductsInput> | discountsCreateWithoutProductsInput[] | discountsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: discountsCreateOrConnectWithoutProductsInput | discountsCreateOrConnectWithoutProductsInput[]
    upsert?: discountsUpsertWithWhereUniqueWithoutProductsInput | discountsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: discountsCreateManyProductsInputEnvelope
    set?: discountsWhereUniqueInput | discountsWhereUniqueInput[]
    disconnect?: discountsWhereUniqueInput | discountsWhereUniqueInput[]
    delete?: discountsWhereUniqueInput | discountsWhereUniqueInput[]
    connect?: discountsWhereUniqueInput | discountsWhereUniqueInput[]
    update?: discountsUpdateWithWhereUniqueWithoutProductsInput | discountsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: discountsUpdateManyWithWhereWithoutProductsInput | discountsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: discountsScalarWhereInput | discountsScalarWhereInput[]
  }

  export type productcommentsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<productcommentsCreateWithoutProductsInput, productcommentsUncheckedCreateWithoutProductsInput> | productcommentsCreateWithoutProductsInput[] | productcommentsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: productcommentsCreateOrConnectWithoutProductsInput | productcommentsCreateOrConnectWithoutProductsInput[]
    upsert?: productcommentsUpsertWithWhereUniqueWithoutProductsInput | productcommentsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: productcommentsCreateManyProductsInputEnvelope
    set?: productcommentsWhereUniqueInput | productcommentsWhereUniqueInput[]
    disconnect?: productcommentsWhereUniqueInput | productcommentsWhereUniqueInput[]
    delete?: productcommentsWhereUniqueInput | productcommentsWhereUniqueInput[]
    connect?: productcommentsWhereUniqueInput | productcommentsWhereUniqueInput[]
    update?: productcommentsUpdateWithWhereUniqueWithoutProductsInput | productcommentsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: productcommentsUpdateManyWithWhereWithoutProductsInput | productcommentsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: productcommentsScalarWhereInput | productcommentsScalarWhereInput[]
  }

  export type productcategoriesUpdateOneWithoutProductsNestedInput = {
    create?: XOR<productcategoriesCreateWithoutProductsInput, productcategoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: productcategoriesCreateOrConnectWithoutProductsInput
    upsert?: productcategoriesUpsertWithoutProductsInput
    disconnect?: productcategoriesWhereInput | boolean
    delete?: productcategoriesWhereInput | boolean
    connect?: productcategoriesWhereUniqueInput
    update?: XOR<XOR<productcategoriesUpdateToOneWithWhereWithoutProductsInput, productcategoriesUpdateWithoutProductsInput>, productcategoriesUncheckedUpdateWithoutProductsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type discountsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<discountsCreateWithoutProductsInput, discountsUncheckedCreateWithoutProductsInput> | discountsCreateWithoutProductsInput[] | discountsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: discountsCreateOrConnectWithoutProductsInput | discountsCreateOrConnectWithoutProductsInput[]
    upsert?: discountsUpsertWithWhereUniqueWithoutProductsInput | discountsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: discountsCreateManyProductsInputEnvelope
    set?: discountsWhereUniqueInput | discountsWhereUniqueInput[]
    disconnect?: discountsWhereUniqueInput | discountsWhereUniqueInput[]
    delete?: discountsWhereUniqueInput | discountsWhereUniqueInput[]
    connect?: discountsWhereUniqueInput | discountsWhereUniqueInput[]
    update?: discountsUpdateWithWhereUniqueWithoutProductsInput | discountsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: discountsUpdateManyWithWhereWithoutProductsInput | discountsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: discountsScalarWhereInput | discountsScalarWhereInput[]
  }

  export type productcommentsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<productcommentsCreateWithoutProductsInput, productcommentsUncheckedCreateWithoutProductsInput> | productcommentsCreateWithoutProductsInput[] | productcommentsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: productcommentsCreateOrConnectWithoutProductsInput | productcommentsCreateOrConnectWithoutProductsInput[]
    upsert?: productcommentsUpsertWithWhereUniqueWithoutProductsInput | productcommentsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: productcommentsCreateManyProductsInputEnvelope
    set?: productcommentsWhereUniqueInput | productcommentsWhereUniqueInput[]
    disconnect?: productcommentsWhereUniqueInput | productcommentsWhereUniqueInput[]
    delete?: productcommentsWhereUniqueInput | productcommentsWhereUniqueInput[]
    connect?: productcommentsWhereUniqueInput | productcommentsWhereUniqueInput[]
    update?: productcommentsUpdateWithWhereUniqueWithoutProductsInput | productcommentsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: productcommentsUpdateManyWithWhereWithoutProductsInput | productcommentsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: productcommentsScalarWhereInput | productcommentsScalarWhereInput[]
  }

  export type addressesCreateNestedOneWithoutUserInput = {
    create?: XOR<addressesCreateWithoutUserInput, addressesUncheckedCreateWithoutUserInput>
    connectOrCreate?: addressesCreateOrConnectWithoutUserInput
    connect?: addressesWhereUniqueInput
  }

  export type addressesUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<addressesCreateWithoutUserInput, addressesUncheckedCreateWithoutUserInput>
    connectOrCreate?: addressesCreateOrConnectWithoutUserInput
    connect?: addressesWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type addressesUpdateOneWithoutUserNestedInput = {
    create?: XOR<addressesCreateWithoutUserInput, addressesUncheckedCreateWithoutUserInput>
    connectOrCreate?: addressesCreateOrConnectWithoutUserInput
    upsert?: addressesUpsertWithoutUserInput
    disconnect?: addressesWhereInput | boolean
    delete?: addressesWhereInput | boolean
    connect?: addressesWhereUniqueInput
    update?: XOR<XOR<addressesUpdateToOneWithWhereWithoutUserInput, addressesUpdateWithoutUserInput>, addressesUncheckedUpdateWithoutUserInput>
  }

  export type addressesUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<addressesCreateWithoutUserInput, addressesUncheckedCreateWithoutUserInput>
    connectOrCreate?: addressesCreateOrConnectWithoutUserInput
    upsert?: addressesUpsertWithoutUserInput
    disconnect?: addressesWhereInput | boolean
    delete?: addressesWhereInput | boolean
    connect?: addressesWhereUniqueInput
    update?: XOR<XOR<addressesUpdateToOneWithWhereWithoutUserInput, addressesUpdateWithoutUserInput>, addressesUncheckedUpdateWithoutUserInput>
  }

  export type usersCreateNestedOneWithoutAddressesInput = {
    create?: XOR<usersCreateWithoutAddressesInput, usersUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: usersCreateOrConnectWithoutAddressesInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: XOR<usersCreateWithoutAddressesInput, usersUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: usersCreateOrConnectWithoutAddressesInput
    upsert?: usersUpsertWithoutAddressesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAddressesInput, usersUpdateWithoutAddressesInput>, usersUncheckedUpdateWithoutAddressesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type productsCreateWithoutDiscountsInput = {
    title: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    thumbnail: string
    stock: number
    dimensions: JsonNullValueInput | InputJsonValue
    meta: JsonNullValueInput | InputJsonValue
    rating: number
    productcomments?: productcommentsCreateNestedManyWithoutProductsInput
    productcategories?: productcategoriesCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutDiscountsInput = {
    id?: number
    title: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    thumbnail: string
    stock: number
    dimensions: JsonNullValueInput | InputJsonValue
    meta: JsonNullValueInput | InputJsonValue
    rating: number
    category_relation_id?: number | null
    productcomments?: productcommentsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutDiscountsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutDiscountsInput, productsUncheckedCreateWithoutDiscountsInput>
  }

  export type productsUpsertWithoutDiscountsInput = {
    update: XOR<productsUpdateWithoutDiscountsInput, productsUncheckedUpdateWithoutDiscountsInput>
    create: XOR<productsCreateWithoutDiscountsInput, productsUncheckedCreateWithoutDiscountsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutDiscountsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutDiscountsInput, productsUncheckedUpdateWithoutDiscountsInput>
  }

  export type productsUpdateWithoutDiscountsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    dimensions?: JsonNullValueInput | InputJsonValue
    meta?: JsonNullValueInput | InputJsonValue
    rating?: FloatFieldUpdateOperationsInput | number
    productcomments?: productcommentsUpdateManyWithoutProductsNestedInput
    productcategories?: productcategoriesUpdateOneWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutDiscountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    dimensions?: JsonNullValueInput | InputJsonValue
    meta?: JsonNullValueInput | InputJsonValue
    rating?: FloatFieldUpdateOperationsInput | number
    category_relation_id?: NullableIntFieldUpdateOperationsInput | number | null
    productcomments?: productcommentsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsCreateWithoutProductcategoriesInput = {
    title: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    thumbnail: string
    stock: number
    dimensions: JsonNullValueInput | InputJsonValue
    meta: JsonNullValueInput | InputJsonValue
    rating: number
    discounts?: discountsCreateNestedManyWithoutProductsInput
    productcomments?: productcommentsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutProductcategoriesInput = {
    id?: number
    title: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    thumbnail: string
    stock: number
    dimensions: JsonNullValueInput | InputJsonValue
    meta: JsonNullValueInput | InputJsonValue
    rating: number
    discounts?: discountsUncheckedCreateNestedManyWithoutProductsInput
    productcomments?: productcommentsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutProductcategoriesInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutProductcategoriesInput, productsUncheckedCreateWithoutProductcategoriesInput>
  }

  export type productsCreateManyProductcategoriesInputEnvelope = {
    data: productsCreateManyProductcategoriesInput | productsCreateManyProductcategoriesInput[]
    skipDuplicates?: boolean
  }

  export type productsUpsertWithWhereUniqueWithoutProductcategoriesInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutProductcategoriesInput, productsUncheckedUpdateWithoutProductcategoriesInput>
    create: XOR<productsCreateWithoutProductcategoriesInput, productsUncheckedCreateWithoutProductcategoriesInput>
  }

  export type productsUpdateWithWhereUniqueWithoutProductcategoriesInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutProductcategoriesInput, productsUncheckedUpdateWithoutProductcategoriesInput>
  }

  export type productsUpdateManyWithWhereWithoutProductcategoriesInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutProductcategoriesInput>
  }

  export type productsScalarWhereInput = {
    AND?: productsScalarWhereInput | productsScalarWhereInput[]
    OR?: productsScalarWhereInput[]
    NOT?: productsScalarWhereInput | productsScalarWhereInput[]
    id?: IntFilter<"products"> | number
    title?: StringFilter<"products"> | string
    description?: StringFilter<"products"> | string
    price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    thumbnail?: StringFilter<"products"> | string
    stock?: IntFilter<"products"> | number
    dimensions?: JsonFilter<"products">
    meta?: JsonFilter<"products">
    rating?: FloatFilter<"products"> | number
    category_relation_id?: IntNullableFilter<"products"> | number | null
  }

  export type productsCreateWithoutProductcommentsInput = {
    title: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    thumbnail: string
    stock: number
    dimensions: JsonNullValueInput | InputJsonValue
    meta: JsonNullValueInput | InputJsonValue
    rating: number
    discounts?: discountsCreateNestedManyWithoutProductsInput
    productcategories?: productcategoriesCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutProductcommentsInput = {
    id?: number
    title: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    thumbnail: string
    stock: number
    dimensions: JsonNullValueInput | InputJsonValue
    meta: JsonNullValueInput | InputJsonValue
    rating: number
    category_relation_id?: number | null
    discounts?: discountsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutProductcommentsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutProductcommentsInput, productsUncheckedCreateWithoutProductcommentsInput>
  }

  export type productsUpsertWithoutProductcommentsInput = {
    update: XOR<productsUpdateWithoutProductcommentsInput, productsUncheckedUpdateWithoutProductcommentsInput>
    create: XOR<productsCreateWithoutProductcommentsInput, productsUncheckedCreateWithoutProductcommentsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutProductcommentsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutProductcommentsInput, productsUncheckedUpdateWithoutProductcommentsInput>
  }

  export type productsUpdateWithoutProductcommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    dimensions?: JsonNullValueInput | InputJsonValue
    meta?: JsonNullValueInput | InputJsonValue
    rating?: FloatFieldUpdateOperationsInput | number
    discounts?: discountsUpdateManyWithoutProductsNestedInput
    productcategories?: productcategoriesUpdateOneWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutProductcommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    dimensions?: JsonNullValueInput | InputJsonValue
    meta?: JsonNullValueInput | InputJsonValue
    rating?: FloatFieldUpdateOperationsInput | number
    category_relation_id?: NullableIntFieldUpdateOperationsInput | number | null
    discounts?: discountsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type discountsCreateWithoutProductsInput = {
    title: string
    percent: number
    start_date: Date | string
    end_date: Date | string
    is_active: boolean
  }

  export type discountsUncheckedCreateWithoutProductsInput = {
    id?: number
    title: string
    percent: number
    start_date: Date | string
    end_date: Date | string
    is_active: boolean
  }

  export type discountsCreateOrConnectWithoutProductsInput = {
    where: discountsWhereUniqueInput
    create: XOR<discountsCreateWithoutProductsInput, discountsUncheckedCreateWithoutProductsInput>
  }

  export type discountsCreateManyProductsInputEnvelope = {
    data: discountsCreateManyProductsInput | discountsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type productcommentsCreateWithoutProductsInput = {
    reviewer_name: string
    reviewer_email: string
    rating: number
    comment: string
    date: Date | string
  }

  export type productcommentsUncheckedCreateWithoutProductsInput = {
    id?: number
    reviewer_name: string
    reviewer_email: string
    rating: number
    comment: string
    date: Date | string
  }

  export type productcommentsCreateOrConnectWithoutProductsInput = {
    where: productcommentsWhereUniqueInput
    create: XOR<productcommentsCreateWithoutProductsInput, productcommentsUncheckedCreateWithoutProductsInput>
  }

  export type productcommentsCreateManyProductsInputEnvelope = {
    data: productcommentsCreateManyProductsInput | productcommentsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type productcategoriesCreateWithoutProductsInput = {
    name: string
    slug: string
  }

  export type productcategoriesUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    slug: string
  }

  export type productcategoriesCreateOrConnectWithoutProductsInput = {
    where: productcategoriesWhereUniqueInput
    create: XOR<productcategoriesCreateWithoutProductsInput, productcategoriesUncheckedCreateWithoutProductsInput>
  }

  export type discountsUpsertWithWhereUniqueWithoutProductsInput = {
    where: discountsWhereUniqueInput
    update: XOR<discountsUpdateWithoutProductsInput, discountsUncheckedUpdateWithoutProductsInput>
    create: XOR<discountsCreateWithoutProductsInput, discountsUncheckedCreateWithoutProductsInput>
  }

  export type discountsUpdateWithWhereUniqueWithoutProductsInput = {
    where: discountsWhereUniqueInput
    data: XOR<discountsUpdateWithoutProductsInput, discountsUncheckedUpdateWithoutProductsInput>
  }

  export type discountsUpdateManyWithWhereWithoutProductsInput = {
    where: discountsScalarWhereInput
    data: XOR<discountsUpdateManyMutationInput, discountsUncheckedUpdateManyWithoutProductsInput>
  }

  export type discountsScalarWhereInput = {
    AND?: discountsScalarWhereInput | discountsScalarWhereInput[]
    OR?: discountsScalarWhereInput[]
    NOT?: discountsScalarWhereInput | discountsScalarWhereInput[]
    id?: IntFilter<"discounts"> | number
    title?: StringFilter<"discounts"> | string
    percent?: IntFilter<"discounts"> | number
    start_date?: DateTimeFilter<"discounts"> | Date | string
    end_date?: DateTimeFilter<"discounts"> | Date | string
    is_active?: BoolFilter<"discounts"> | boolean
    product_id?: IntFilter<"discounts"> | number
  }

  export type productcommentsUpsertWithWhereUniqueWithoutProductsInput = {
    where: productcommentsWhereUniqueInput
    update: XOR<productcommentsUpdateWithoutProductsInput, productcommentsUncheckedUpdateWithoutProductsInput>
    create: XOR<productcommentsCreateWithoutProductsInput, productcommentsUncheckedCreateWithoutProductsInput>
  }

  export type productcommentsUpdateWithWhereUniqueWithoutProductsInput = {
    where: productcommentsWhereUniqueInput
    data: XOR<productcommentsUpdateWithoutProductsInput, productcommentsUncheckedUpdateWithoutProductsInput>
  }

  export type productcommentsUpdateManyWithWhereWithoutProductsInput = {
    where: productcommentsScalarWhereInput
    data: XOR<productcommentsUpdateManyMutationInput, productcommentsUncheckedUpdateManyWithoutProductsInput>
  }

  export type productcommentsScalarWhereInput = {
    AND?: productcommentsScalarWhereInput | productcommentsScalarWhereInput[]
    OR?: productcommentsScalarWhereInput[]
    NOT?: productcommentsScalarWhereInput | productcommentsScalarWhereInput[]
    id?: IntFilter<"productcomments"> | number
    reviewer_name?: StringFilter<"productcomments"> | string
    reviewer_email?: StringFilter<"productcomments"> | string
    rating?: IntFilter<"productcomments"> | number
    comment?: StringFilter<"productcomments"> | string
    date?: DateTimeFilter<"productcomments"> | Date | string
    product_id?: IntFilter<"productcomments"> | number
  }

  export type productcategoriesUpsertWithoutProductsInput = {
    update: XOR<productcategoriesUpdateWithoutProductsInput, productcategoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<productcategoriesCreateWithoutProductsInput, productcategoriesUncheckedCreateWithoutProductsInput>
    where?: productcategoriesWhereInput
  }

  export type productcategoriesUpdateToOneWithWhereWithoutProductsInput = {
    where?: productcategoriesWhereInput
    data: XOR<productcategoriesUpdateWithoutProductsInput, productcategoriesUncheckedUpdateWithoutProductsInput>
  }

  export type productcategoriesUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type productcategoriesUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type addressesCreateWithoutUserInput = {
    label?: string | null
    province: string
    city: string
    postal_code: string
    address_line: string
    is_default?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type addressesUncheckedCreateWithoutUserInput = {
    id?: number
    label?: string | null
    province: string
    city: string
    postal_code: string
    address_line: string
    is_default?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type addressesCreateOrConnectWithoutUserInput = {
    where: addressesWhereUniqueInput
    create: XOR<addressesCreateWithoutUserInput, addressesUncheckedCreateWithoutUserInput>
  }

  export type addressesUpsertWithoutUserInput = {
    update: XOR<addressesUpdateWithoutUserInput, addressesUncheckedUpdateWithoutUserInput>
    create: XOR<addressesCreateWithoutUserInput, addressesUncheckedCreateWithoutUserInput>
    where?: addressesWhereInput
  }

  export type addressesUpdateToOneWithWhereWithoutUserInput = {
    where?: addressesWhereInput
    data: XOR<addressesUpdateWithoutUserInput, addressesUncheckedUpdateWithoutUserInput>
  }

  export type addressesUpdateWithoutUserInput = {
    label?: NullableStringFieldUpdateOperationsInput | string | null
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    address_line?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type addressesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: NullableStringFieldUpdateOperationsInput | string | null
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    address_line?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateWithoutAddressesInput = {
    username?: string | null
    email: string
    password_hash: string
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    is_verified?: boolean
    role?: string
    last_login_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersUncheckedCreateWithoutAddressesInput = {
    id?: number
    username?: string | null
    email: string
    password_hash: string
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    is_verified?: boolean
    role?: string
    last_login_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersCreateOrConnectWithoutAddressesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAddressesInput, usersUncheckedCreateWithoutAddressesInput>
  }

  export type usersUpsertWithoutAddressesInput = {
    update: XOR<usersUpdateWithoutAddressesInput, usersUncheckedUpdateWithoutAddressesInput>
    create: XOR<usersCreateWithoutAddressesInput, usersUncheckedCreateWithoutAddressesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAddressesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAddressesInput, usersUncheckedUpdateWithoutAddressesInput>
  }

  export type usersUpdateWithoutAddressesInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateWithoutAddressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsCreateManyProductcategoriesInput = {
    id?: number
    title: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    thumbnail: string
    stock: number
    dimensions: JsonNullValueInput | InputJsonValue
    meta: JsonNullValueInput | InputJsonValue
    rating: number
  }

  export type productsUpdateWithoutProductcategoriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    dimensions?: JsonNullValueInput | InputJsonValue
    meta?: JsonNullValueInput | InputJsonValue
    rating?: FloatFieldUpdateOperationsInput | number
    discounts?: discountsUpdateManyWithoutProductsNestedInput
    productcomments?: productcommentsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutProductcategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    dimensions?: JsonNullValueInput | InputJsonValue
    meta?: JsonNullValueInput | InputJsonValue
    rating?: FloatFieldUpdateOperationsInput | number
    discounts?: discountsUncheckedUpdateManyWithoutProductsNestedInput
    productcomments?: productcommentsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateManyWithoutProductcategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    dimensions?: JsonNullValueInput | InputJsonValue
    meta?: JsonNullValueInput | InputJsonValue
    rating?: FloatFieldUpdateOperationsInput | number
  }

  export type discountsCreateManyProductsInput = {
    id?: number
    title: string
    percent: number
    start_date: Date | string
    end_date: Date | string
    is_active: boolean
  }

  export type productcommentsCreateManyProductsInput = {
    id?: number
    reviewer_name: string
    reviewer_email: string
    rating: number
    comment: string
    date: Date | string
  }

  export type discountsUpdateWithoutProductsInput = {
    title?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type discountsUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type discountsUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    percent?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type productcommentsUpdateWithoutProductsInput = {
    reviewer_name?: StringFieldUpdateOperationsInput | string
    reviewer_email?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productcommentsUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewer_name?: StringFieldUpdateOperationsInput | string
    reviewer_email?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productcommentsUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewer_name?: StringFieldUpdateOperationsInput | string
    reviewer_email?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}