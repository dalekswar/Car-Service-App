
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model UserRole
 * 
 */
export type UserRole = $Result.DefaultSelection<Prisma.$UserRolePayload>
/**
 * Model Region
 * 
 */
export type Region = $Result.DefaultSelection<Prisma.$RegionPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model WorkSchedule
 * 
 */
export type WorkSchedule = $Result.DefaultSelection<Prisma.$WorkSchedulePayload>
/**
 * Model ProductionCalendar
 * 
 */
export type ProductionCalendar = $Result.DefaultSelection<Prisma.$ProductionCalendarPayload>
/**
 * Model Car
 * 
 */
export type Car = $Result.DefaultSelection<Prisma.$CarPayload>
/**
 * Model RepairOrder
 * 
 */
export type RepairOrder = $Result.DefaultSelection<Prisma.$RepairOrderPayload>
/**
 * Model Part
 * 
 */
export type Part = $Result.DefaultSelection<Prisma.$PartPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoles
    * const userRoles = await prisma.userRole.findMany()
    * ```
    */
  get userRole(): Prisma.UserRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.region`: Exposes CRUD operations for the **Region** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regions
    * const regions = await prisma.region.findMany()
    * ```
    */
  get region(): Prisma.RegionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workSchedule`: Exposes CRUD operations for the **WorkSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkSchedules
    * const workSchedules = await prisma.workSchedule.findMany()
    * ```
    */
  get workSchedule(): Prisma.WorkScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productionCalendar`: Exposes CRUD operations for the **ProductionCalendar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductionCalendars
    * const productionCalendars = await prisma.productionCalendar.findMany()
    * ```
    */
  get productionCalendar(): Prisma.ProductionCalendarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.car`: Exposes CRUD operations for the **Car** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cars
    * const cars = await prisma.car.findMany()
    * ```
    */
  get car(): Prisma.CarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.repairOrder`: Exposes CRUD operations for the **RepairOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RepairOrders
    * const repairOrders = await prisma.repairOrder.findMany()
    * ```
    */
  get repairOrder(): Prisma.RepairOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.part`: Exposes CRUD operations for the **Part** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parts
    * const parts = await prisma.part.findMany()
    * ```
    */
  get part(): Prisma.PartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    Role: 'Role',
    UserRole: 'UserRole',
    Region: 'Region',
    Employee: 'Employee',
    WorkSchedule: 'WorkSchedule',
    ProductionCalendar: 'ProductionCalendar',
    Car: 'Car',
    RepairOrder: 'RepairOrder',
    Part: 'Part',
    Payment: 'Payment',
    Service: 'Service'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "role" | "userRole" | "region" | "employee" | "workSchedule" | "productionCalendar" | "car" | "repairOrder" | "part" | "payment" | "service"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      UserRole: {
        payload: Prisma.$UserRolePayload<ExtArgs>
        fields: Prisma.UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findFirst: {
            args: Prisma.UserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findMany: {
            args: Prisma.UserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          create: {
            args: Prisma.UserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          createMany: {
            args: Prisma.UserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          update: {
            args: Prisma.UserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          deleteMany: {
            args: Prisma.UserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRole>
          }
          groupBy: {
            args: Prisma.UserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number
          }
        }
      }
      Region: {
        payload: Prisma.$RegionPayload<ExtArgs>
        fields: Prisma.RegionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findFirst: {
            args: Prisma.RegionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findMany: {
            args: Prisma.RegionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          create: {
            args: Prisma.RegionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          createMany: {
            args: Prisma.RegionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RegionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          update: {
            args: Prisma.RegionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          deleteMany: {
            args: Prisma.RegionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RegionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          aggregate: {
            args: Prisma.RegionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegion>
          }
          groupBy: {
            args: Prisma.RegionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegionCountArgs<ExtArgs>
            result: $Utils.Optional<RegionCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      WorkSchedule: {
        payload: Prisma.$WorkSchedulePayload<ExtArgs>
        fields: Prisma.WorkScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload>
          }
          findFirst: {
            args: Prisma.WorkScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload>
          }
          findMany: {
            args: Prisma.WorkScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload>[]
          }
          create: {
            args: Prisma.WorkScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload>
          }
          createMany: {
            args: Prisma.WorkScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WorkScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload>
          }
          update: {
            args: Prisma.WorkScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload>
          }
          deleteMany: {
            args: Prisma.WorkScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload>
          }
          aggregate: {
            args: Prisma.WorkScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkSchedule>
          }
          groupBy: {
            args: Prisma.WorkScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<WorkScheduleCountAggregateOutputType> | number
          }
        }
      }
      ProductionCalendar: {
        payload: Prisma.$ProductionCalendarPayload<ExtArgs>
        fields: Prisma.ProductionCalendarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductionCalendarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionCalendarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductionCalendarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionCalendarPayload>
          }
          findFirst: {
            args: Prisma.ProductionCalendarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionCalendarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductionCalendarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionCalendarPayload>
          }
          findMany: {
            args: Prisma.ProductionCalendarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionCalendarPayload>[]
          }
          create: {
            args: Prisma.ProductionCalendarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionCalendarPayload>
          }
          createMany: {
            args: Prisma.ProductionCalendarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductionCalendarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionCalendarPayload>
          }
          update: {
            args: Prisma.ProductionCalendarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionCalendarPayload>
          }
          deleteMany: {
            args: Prisma.ProductionCalendarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductionCalendarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductionCalendarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionCalendarPayload>
          }
          aggregate: {
            args: Prisma.ProductionCalendarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductionCalendar>
          }
          groupBy: {
            args: Prisma.ProductionCalendarGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductionCalendarGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductionCalendarCountArgs<ExtArgs>
            result: $Utils.Optional<ProductionCalendarCountAggregateOutputType> | number
          }
        }
      }
      Car: {
        payload: Prisma.$CarPayload<ExtArgs>
        fields: Prisma.CarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findFirst: {
            args: Prisma.CarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findMany: {
            args: Prisma.CarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          create: {
            args: Prisma.CarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          createMany: {
            args: Prisma.CarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          update: {
            args: Prisma.CarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          deleteMany: {
            args: Prisma.CarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          aggregate: {
            args: Prisma.CarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCar>
          }
          groupBy: {
            args: Prisma.CarGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarCountArgs<ExtArgs>
            result: $Utils.Optional<CarCountAggregateOutputType> | number
          }
        }
      }
      RepairOrder: {
        payload: Prisma.$RepairOrderPayload<ExtArgs>
        fields: Prisma.RepairOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepairOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepairOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairOrderPayload>
          }
          findFirst: {
            args: Prisma.RepairOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepairOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairOrderPayload>
          }
          findMany: {
            args: Prisma.RepairOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairOrderPayload>[]
          }
          create: {
            args: Prisma.RepairOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairOrderPayload>
          }
          createMany: {
            args: Prisma.RepairOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RepairOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairOrderPayload>
          }
          update: {
            args: Prisma.RepairOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairOrderPayload>
          }
          deleteMany: {
            args: Prisma.RepairOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepairOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RepairOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairOrderPayload>
          }
          aggregate: {
            args: Prisma.RepairOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepairOrder>
          }
          groupBy: {
            args: Prisma.RepairOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepairOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.RepairOrderCountArgs<ExtArgs>
            result: $Utils.Optional<RepairOrderCountAggregateOutputType> | number
          }
        }
      }
      Part: {
        payload: Prisma.$PartPayload<ExtArgs>
        fields: Prisma.PartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          findFirst: {
            args: Prisma.PartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          findMany: {
            args: Prisma.PartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>[]
          }
          create: {
            args: Prisma.PartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          createMany: {
            args: Prisma.PartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          update: {
            args: Prisma.PartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          deleteMany: {
            args: Prisma.PartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          aggregate: {
            args: Prisma.PartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePart>
          }
          groupBy: {
            args: Prisma.PartGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartCountArgs<ExtArgs>
            result: $Utils.Optional<PartCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    role?: RoleOmit
    userRole?: UserRoleOmit
    region?: RegionOmit
    employee?: EmployeeOmit
    workSchedule?: WorkScheduleOmit
    productionCalendar?: ProductionCalendarOmit
    car?: CarOmit
    repairOrder?: RepairOrderOmit
    part?: PartOmit
    payment?: PaymentOmit
    service?: ServiceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    cars: number
    ordersUser: number
    ordersEmployee: number
    userRoles: number
    payments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cars?: boolean | UserCountOutputTypeCountCarsArgs
    ordersUser?: boolean | UserCountOutputTypeCountOrdersUserArgs
    ordersEmployee?: boolean | UserCountOutputTypeCountOrdersEmployeeArgs
    userRoles?: boolean | UserCountOutputTypeCountUserRolesArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepairOrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersEmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepairOrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    userRoles: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userRoles?: boolean | RoleCountOutputTypeCountUserRolesArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUserRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }


  /**
   * Count Type RegionCountOutputType
   */

  export type RegionCountOutputType = {
    users: number
  }

  export type RegionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RegionCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionCountOutputType
     */
    select?: RegionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    workSchedules: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workSchedules?: boolean | EmployeeCountOutputTypeCountWorkSchedulesArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountWorkSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkScheduleWhereInput
  }


  /**
   * Count Type WorkScheduleCountOutputType
   */

  export type WorkScheduleCountOutputType = {
    calendar: number
  }

  export type WorkScheduleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calendar?: boolean | WorkScheduleCountOutputTypeCountCalendarArgs
  }

  // Custom InputTypes
  /**
   * WorkScheduleCountOutputType without action
   */
  export type WorkScheduleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkScheduleCountOutputType
     */
    select?: WorkScheduleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkScheduleCountOutputType without action
   */
  export type WorkScheduleCountOutputTypeCountCalendarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductionCalendarWhereInput
  }


  /**
   * Count Type CarCountOutputType
   */

  export type CarCountOutputType = {
    repairOrders: number
  }

  export type CarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repairOrders?: boolean | CarCountOutputTypeCountRepairOrdersArgs
  }

  // Custom InputTypes
  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarCountOutputType
     */
    select?: CarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountRepairOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepairOrderWhereInput
  }


  /**
   * Count Type RepairOrderCountOutputType
   */

  export type RepairOrderCountOutputType = {
    calendar: number
    payments: number
  }

  export type RepairOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calendar?: boolean | RepairOrderCountOutputTypeCountCalendarArgs
    payments?: boolean | RepairOrderCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * RepairOrderCountOutputType without action
   */
  export type RepairOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairOrderCountOutputType
     */
    select?: RepairOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RepairOrderCountOutputType without action
   */
  export type RepairOrderCountOutputTypeCountCalendarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductionCalendarWhereInput
  }

  /**
   * RepairOrderCountOutputType without action
   */
  export type RepairOrderCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    regionId: number | null
    createdBy: number | null
    modifiedBy: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    regionId: number | null
    createdBy: number | null
    modifiedBy: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    avatar: string | null
    regionId: number | null
    created: Date | null
    createdBy: number | null
    modified: Date | null
    modifiedBy: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    avatar: string | null
    regionId: number | null
    created: Date | null
    createdBy: number | null
    modified: Date | null
    modifiedBy: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    avatar: number
    regionId: number
    created: number
    createdBy: number
    modified: number
    modifiedBy: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    regionId?: true
    createdBy?: true
    modifiedBy?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    regionId?: true
    createdBy?: true
    modifiedBy?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    avatar?: true
    regionId?: true
    created?: true
    createdBy?: true
    modified?: true
    modifiedBy?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    avatar?: true
    regionId?: true
    created?: true
    createdBy?: true
    modified?: true
    modifiedBy?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    avatar?: true
    regionId?: true
    created?: true
    createdBy?: true
    modified?: true
    modifiedBy?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string
    avatar: string | null
    regionId: number
    created: Date
    createdBy: number
    modified: Date | null
    modifiedBy: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    avatar?: boolean
    regionId?: boolean
    created?: boolean
    createdBy?: boolean
    modified?: boolean
    modifiedBy?: boolean
    region?: boolean | RegionDefaultArgs<ExtArgs>
    cars?: boolean | User$carsArgs<ExtArgs>
    ordersUser?: boolean | User$ordersUserArgs<ExtArgs>
    ordersEmployee?: boolean | User$ordersEmployeeArgs<ExtArgs>
    employee?: boolean | User$employeeArgs<ExtArgs>
    userRoles?: boolean | User$userRolesArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    avatar?: boolean
    regionId?: boolean
    created?: boolean
    createdBy?: boolean
    modified?: boolean
    modifiedBy?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "avatar" | "regionId" | "created" | "createdBy" | "modified" | "modifiedBy", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region?: boolean | RegionDefaultArgs<ExtArgs>
    cars?: boolean | User$carsArgs<ExtArgs>
    ordersUser?: boolean | User$ordersUserArgs<ExtArgs>
    ordersEmployee?: boolean | User$ordersEmployeeArgs<ExtArgs>
    employee?: boolean | User$employeeArgs<ExtArgs>
    userRoles?: boolean | User$userRolesArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      region: Prisma.$RegionPayload<ExtArgs>
      cars: Prisma.$CarPayload<ExtArgs>[]
      ordersUser: Prisma.$RepairOrderPayload<ExtArgs>[]
      ordersEmployee: Prisma.$RepairOrderPayload<ExtArgs>[]
      employee: Prisma.$EmployeePayload<ExtArgs> | null
      userRoles: Prisma.$UserRolePayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string
      avatar: string | null
      regionId: number
      created: Date
      createdBy: number
      modified: Date | null
      modifiedBy: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    region<T extends RegionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RegionDefaultArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cars<T extends User$carsArgs<ExtArgs> = {}>(args?: Subset<T, User$carsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ordersUser<T extends User$ordersUserArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ordersEmployee<T extends User$ordersEmployeeArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersEmployeeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    employee<T extends User$employeeArgs<ExtArgs> = {}>(args?: Subset<T, User$employeeArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    userRoles<T extends User$userRolesArgs<ExtArgs> = {}>(args?: Subset<T, User$userRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly regionId: FieldRef<"User", 'Int'>
    readonly created: FieldRef<"User", 'DateTime'>
    readonly createdBy: FieldRef<"User", 'Int'>
    readonly modified: FieldRef<"User", 'DateTime'>
    readonly modifiedBy: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.cars
   */
  export type User$carsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    where?: CarWhereInput
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    cursor?: CarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * User.ordersUser
   */
  export type User$ordersUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairOrder
     */
    select?: RepairOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairOrder
     */
    omit?: RepairOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairOrderInclude<ExtArgs> | null
    where?: RepairOrderWhereInput
    orderBy?: RepairOrderOrderByWithRelationInput | RepairOrderOrderByWithRelationInput[]
    cursor?: RepairOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepairOrderScalarFieldEnum | RepairOrderScalarFieldEnum[]
  }

  /**
   * User.ordersEmployee
   */
  export type User$ordersEmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairOrder
     */
    select?: RepairOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairOrder
     */
    omit?: RepairOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairOrderInclude<ExtArgs> | null
    where?: RepairOrderWhereInput
    orderBy?: RepairOrderOrderByWithRelationInput | RepairOrderOrderByWithRelationInput[]
    cursor?: RepairOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepairOrderScalarFieldEnum | RepairOrderScalarFieldEnum[]
  }

  /**
   * User.employee
   */
  export type User$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * User.userRoles
   */
  export type User$userRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: string
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userRoles?: boolean | Role$userRolesArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>



  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userRoles?: boolean | Role$userRolesArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      userRoles: Prisma.$UserRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userRoles<T extends Role$userRolesArgs<ExtArgs> = {}>(args?: Subset<T, Role$userRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.userRoles
   */
  export type Role$userRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model UserRole
   */

  export type AggregateUserRole = {
    _count: UserRoleCountAggregateOutputType | null
    _avg: UserRoleAvgAggregateOutputType | null
    _sum: UserRoleSumAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  export type UserRoleAvgAggregateOutputType = {
    userId: number | null
    roleId: number | null
  }

  export type UserRoleSumAggregateOutputType = {
    userId: number | null
    roleId: number | null
  }

  export type UserRoleMinAggregateOutputType = {
    userId: number | null
    roleId: number | null
  }

  export type UserRoleMaxAggregateOutputType = {
    userId: number | null
    roleId: number | null
  }

  export type UserRoleCountAggregateOutputType = {
    userId: number
    roleId: number
    _all: number
  }


  export type UserRoleAvgAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type UserRoleSumAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type UserRoleMinAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type UserRoleMaxAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type UserRoleCountAggregateInputType = {
    userId?: true
    roleId?: true
    _all?: true
  }

  export type UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRole to aggregate.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoles
    **/
    _count?: true | UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleMaxAggregateInputType
  }

  export type GetUserRoleAggregateType<T extends UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRole[P]>
      : GetScalarType<T[P], AggregateUserRole[P]>
  }




  export type UserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithAggregationInput | UserRoleOrderByWithAggregationInput[]
    by: UserRoleScalarFieldEnum[] | UserRoleScalarFieldEnum
    having?: UserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleCountAggregateInputType | true
    _avg?: UserRoleAvgAggregateInputType
    _sum?: UserRoleSumAggregateInputType
    _min?: UserRoleMinAggregateInputType
    _max?: UserRoleMaxAggregateInputType
  }

  export type UserRoleGroupByOutputType = {
    userId: number
    roleId: number
    _count: UserRoleCountAggregateOutputType | null
    _avg: UserRoleAvgAggregateOutputType | null
    _sum: UserRoleSumAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  type GetUserRoleGroupByPayload<T extends UserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>



  export type UserRoleSelectScalar = {
    userId?: boolean
    roleId?: boolean
  }

  export type UserRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "roleId", ExtArgs["result"]["userRole"]>
  export type UserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRole"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      roleId: number
    }, ExtArgs["result"]["userRole"]>
    composites: {}
  }

  type UserRoleGetPayload<S extends boolean | null | undefined | UserRoleDefaultArgs> = $Result.GetResult<Prisma.$UserRolePayload, S>

  type UserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRoleCountAggregateInputType | true
    }

  export interface UserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRole'], meta: { name: 'UserRole' } }
    /**
     * Find zero or one UserRole that matches the filter.
     * @param {UserRoleFindUniqueArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRoleFindUniqueArgs>(args: SelectSubset<T, UserRoleFindUniqueArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRoleFindUniqueOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRoleFindFirstArgs>(args?: SelectSubset<T, UserRoleFindFirstArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRole.findMany()
     * 
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRole.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userRoleWithUserIdOnly = await prisma.userRole.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserRoleFindManyArgs>(args?: SelectSubset<T, UserRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRole.
     * @param {UserRoleCreateArgs} args - Arguments to create a UserRole.
     * @example
     * // Create one UserRole
     * const UserRole = await prisma.userRole.create({
     *   data: {
     *     // ... data to create a UserRole
     *   }
     * })
     * 
     */
    create<T extends UserRoleCreateArgs>(args: SelectSubset<T, UserRoleCreateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRoles.
     * @param {UserRoleCreateManyArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRoleCreateManyArgs>(args?: SelectSubset<T, UserRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserRole.
     * @param {UserRoleDeleteArgs} args - Arguments to delete one UserRole.
     * @example
     * // Delete one UserRole
     * const UserRole = await prisma.userRole.delete({
     *   where: {
     *     // ... filter to delete one UserRole
     *   }
     * })
     * 
     */
    delete<T extends UserRoleDeleteArgs>(args: SelectSubset<T, UserRoleDeleteArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRole.
     * @param {UserRoleUpdateArgs} args - Arguments to update one UserRole.
     * @example
     * // Update one UserRole
     * const userRole = await prisma.userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRoleUpdateArgs>(args: SelectSubset<T, UserRoleUpdateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRoles.
     * @param {UserRoleDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRoleDeleteManyArgs>(args?: SelectSubset<T, UserRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRoleUpdateManyArgs>(args: SelectSubset<T, UserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserRole.
     * @param {UserRoleUpsertArgs} args - Arguments to update or create a UserRole.
     * @example
     * // Update or create a UserRole
     * const userRole = await prisma.userRole.upsert({
     *   create: {
     *     // ... data to create a UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRole we want to update
     *   }
     * })
     */
    upsert<T extends UserRoleUpsertArgs>(args: SelectSubset<T, UserRoleUpsertArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRole.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
    **/
    count<T extends UserRoleCountArgs>(
      args?: Subset<T, UserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserRoleAggregateArgs>(args: Subset<T, UserRoleAggregateArgs>): Prisma.PrismaPromise<GetUserRoleAggregateType<T>>

    /**
     * Group by UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleGroupByArgs} args - Group by arguments.
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
      T extends UserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRole model
   */
  readonly fields: UserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserRole model
   */
  interface UserRoleFieldRefs {
    readonly userId: FieldRef<"UserRole", 'Int'>
    readonly roleId: FieldRef<"UserRole", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserRole findUnique
   */
  export type UserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findUniqueOrThrow
   */
  export type UserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findFirst
   */
  export type UserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findFirstOrThrow
   */
  export type UserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findMany
   */
  export type UserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole create
   */
  export type UserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRole.
     */
    data: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
  }

  /**
   * UserRole createMany
   */
  export type UserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRole update
   */
  export type UserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRole.
     */
    data: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
    /**
     * Choose, which UserRole to update.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole updateMany
   */
  export type UserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
  }

  /**
   * UserRole upsert
   */
  export type UserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRole to update in case it exists.
     */
    where: UserRoleWhereUniqueInput
    /**
     * In case the UserRole found by the `where` argument doesn't exist, create a new UserRole with this data.
     */
    create: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
    /**
     * In case the UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
  }

  /**
   * UserRole delete
   */
  export type UserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter which UserRole to delete.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole deleteMany
   */
  export type UserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoles to delete
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to delete.
     */
    limit?: number
  }

  /**
   * UserRole without action
   */
  export type UserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
  }


  /**
   * Model Region
   */

  export type AggregateRegion = {
    _count: RegionCountAggregateOutputType | null
    _avg: RegionAvgAggregateOutputType | null
    _sum: RegionSumAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  export type RegionAvgAggregateOutputType = {
    id: number | null
  }

  export type RegionSumAggregateOutputType = {
    id: number | null
  }

  export type RegionMinAggregateOutputType = {
    id: number | null
    name: string | null
    region: string | null
    district: string | null
  }

  export type RegionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    region: string | null
    district: string | null
  }

  export type RegionCountAggregateOutputType = {
    id: number
    name: number
    region: number
    district: number
    _all: number
  }


  export type RegionAvgAggregateInputType = {
    id?: true
  }

  export type RegionSumAggregateInputType = {
    id?: true
  }

  export type RegionMinAggregateInputType = {
    id?: true
    name?: true
    region?: true
    district?: true
  }

  export type RegionMaxAggregateInputType = {
    id?: true
    name?: true
    region?: true
    district?: true
  }

  export type RegionCountAggregateInputType = {
    id?: true
    name?: true
    region?: true
    district?: true
    _all?: true
  }

  export type RegionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Region to aggregate.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Regions
    **/
    _count?: true | RegionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegionMaxAggregateInputType
  }

  export type GetRegionAggregateType<T extends RegionAggregateArgs> = {
        [P in keyof T & keyof AggregateRegion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegion[P]>
      : GetScalarType<T[P], AggregateRegion[P]>
  }




  export type RegionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegionWhereInput
    orderBy?: RegionOrderByWithAggregationInput | RegionOrderByWithAggregationInput[]
    by: RegionScalarFieldEnum[] | RegionScalarFieldEnum
    having?: RegionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegionCountAggregateInputType | true
    _avg?: RegionAvgAggregateInputType
    _sum?: RegionSumAggregateInputType
    _min?: RegionMinAggregateInputType
    _max?: RegionMaxAggregateInputType
  }

  export type RegionGroupByOutputType = {
    id: number
    name: string
    region: string
    district: string
    _count: RegionCountAggregateOutputType | null
    _avg: RegionAvgAggregateOutputType | null
    _sum: RegionSumAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  type GetRegionGroupByPayload<T extends RegionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegionGroupByOutputType[P]>
            : GetScalarType<T[P], RegionGroupByOutputType[P]>
        }
      >
    >


  export type RegionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    region?: boolean
    district?: boolean
    users?: boolean | Region$usersArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["region"]>



  export type RegionSelectScalar = {
    id?: boolean
    name?: boolean
    region?: boolean
    district?: boolean
  }

  export type RegionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "region" | "district", ExtArgs["result"]["region"]>
  export type RegionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Region$usersArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RegionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Region"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      region: string
      district: string
    }, ExtArgs["result"]["region"]>
    composites: {}
  }

  type RegionGetPayload<S extends boolean | null | undefined | RegionDefaultArgs> = $Result.GetResult<Prisma.$RegionPayload, S>

  type RegionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegionCountAggregateInputType | true
    }

  export interface RegionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Region'], meta: { name: 'Region' } }
    /**
     * Find zero or one Region that matches the filter.
     * @param {RegionFindUniqueArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegionFindUniqueArgs>(args: SelectSubset<T, RegionFindUniqueArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Region that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegionFindUniqueOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegionFindUniqueOrThrowArgs>(args: SelectSubset<T, RegionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Region that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegionFindFirstArgs>(args?: SelectSubset<T, RegionFindFirstArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Region that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegionFindFirstOrThrowArgs>(args?: SelectSubset<T, RegionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regions
     * const regions = await prisma.region.findMany()
     * 
     * // Get first 10 Regions
     * const regions = await prisma.region.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regionWithIdOnly = await prisma.region.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegionFindManyArgs>(args?: SelectSubset<T, RegionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Region.
     * @param {RegionCreateArgs} args - Arguments to create a Region.
     * @example
     * // Create one Region
     * const Region = await prisma.region.create({
     *   data: {
     *     // ... data to create a Region
     *   }
     * })
     * 
     */
    create<T extends RegionCreateArgs>(args: SelectSubset<T, RegionCreateArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Regions.
     * @param {RegionCreateManyArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const region = await prisma.region.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegionCreateManyArgs>(args?: SelectSubset<T, RegionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Region.
     * @param {RegionDeleteArgs} args - Arguments to delete one Region.
     * @example
     * // Delete one Region
     * const Region = await prisma.region.delete({
     *   where: {
     *     // ... filter to delete one Region
     *   }
     * })
     * 
     */
    delete<T extends RegionDeleteArgs>(args: SelectSubset<T, RegionDeleteArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Region.
     * @param {RegionUpdateArgs} args - Arguments to update one Region.
     * @example
     * // Update one Region
     * const region = await prisma.region.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegionUpdateArgs>(args: SelectSubset<T, RegionUpdateArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Regions.
     * @param {RegionDeleteManyArgs} args - Arguments to filter Regions to delete.
     * @example
     * // Delete a few Regions
     * const { count } = await prisma.region.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegionDeleteManyArgs>(args?: SelectSubset<T, RegionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regions
     * const region = await prisma.region.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegionUpdateManyArgs>(args: SelectSubset<T, RegionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Region.
     * @param {RegionUpsertArgs} args - Arguments to update or create a Region.
     * @example
     * // Update or create a Region
     * const region = await prisma.region.upsert({
     *   create: {
     *     // ... data to create a Region
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Region we want to update
     *   }
     * })
     */
    upsert<T extends RegionUpsertArgs>(args: SelectSubset<T, RegionUpsertArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionCountArgs} args - Arguments to filter Regions to count.
     * @example
     * // Count the number of Regions
     * const count = await prisma.region.count({
     *   where: {
     *     // ... the filter for the Regions we want to count
     *   }
     * })
    **/
    count<T extends RegionCountArgs>(
      args?: Subset<T, RegionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegionAggregateArgs>(args: Subset<T, RegionAggregateArgs>): Prisma.PrismaPromise<GetRegionAggregateType<T>>

    /**
     * Group by Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionGroupByArgs} args - Group by arguments.
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
      T extends RegionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegionGroupByArgs['orderBy'] }
        : { orderBy?: RegionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Region model
   */
  readonly fields: RegionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Region.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Region$usersArgs<ExtArgs> = {}>(args?: Subset<T, Region$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Region model
   */
  interface RegionFieldRefs {
    readonly id: FieldRef<"Region", 'Int'>
    readonly name: FieldRef<"Region", 'String'>
    readonly region: FieldRef<"Region", 'String'>
    readonly district: FieldRef<"Region", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Region findUnique
   */
  export type RegionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region findUniqueOrThrow
   */
  export type RegionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region findFirst
   */
  export type RegionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region findFirstOrThrow
   */
  export type RegionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region findMany
   */
  export type RegionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Regions to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region create
   */
  export type RegionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The data needed to create a Region.
     */
    data: XOR<RegionCreateInput, RegionUncheckedCreateInput>
  }

  /**
   * Region createMany
   */
  export type RegionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Regions.
     */
    data: RegionCreateManyInput | RegionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Region update
   */
  export type RegionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The data needed to update a Region.
     */
    data: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
    /**
     * Choose, which Region to update.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region updateMany
   */
  export type RegionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Regions.
     */
    data: XOR<RegionUpdateManyMutationInput, RegionUncheckedUpdateManyInput>
    /**
     * Filter which Regions to update
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to update.
     */
    limit?: number
  }

  /**
   * Region upsert
   */
  export type RegionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The filter to search for the Region to update in case it exists.
     */
    where: RegionWhereUniqueInput
    /**
     * In case the Region found by the `where` argument doesn't exist, create a new Region with this data.
     */
    create: XOR<RegionCreateInput, RegionUncheckedCreateInput>
    /**
     * In case the Region was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
  }

  /**
   * Region delete
   */
  export type RegionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter which Region to delete.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region deleteMany
   */
  export type RegionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regions to delete
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to delete.
     */
    limit?: number
  }

  /**
   * Region.users
   */
  export type Region$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Region without action
   */
  export type RegionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    salary: Decimal | null
    createdBy: number | null
    modifiedBy: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    id: number | null
    userId: number | null
    salary: Decimal | null
    createdBy: number | null
    modifiedBy: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: number | null
    userId: number | null
    position: string | null
    salary: Decimal | null
    hiredDate: Date | null
    created: Date | null
    createdBy: number | null
    modified: Date | null
    modifiedBy: number | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    position: string | null
    salary: Decimal | null
    hiredDate: Date | null
    created: Date | null
    createdBy: number | null
    modified: Date | null
    modifiedBy: number | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    userId: number
    position: number
    salary: number
    hiredDate: number
    created: number
    createdBy: number
    modified: number
    modifiedBy: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    id?: true
    userId?: true
    salary?: true
    createdBy?: true
    modifiedBy?: true
  }

  export type EmployeeSumAggregateInputType = {
    id?: true
    userId?: true
    salary?: true
    createdBy?: true
    modifiedBy?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    userId?: true
    position?: true
    salary?: true
    hiredDate?: true
    created?: true
    createdBy?: true
    modified?: true
    modifiedBy?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    userId?: true
    position?: true
    salary?: true
    hiredDate?: true
    created?: true
    createdBy?: true
    modified?: true
    modifiedBy?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    userId?: true
    position?: true
    salary?: true
    hiredDate?: true
    created?: true
    createdBy?: true
    modified?: true
    modifiedBy?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: number
    userId: number
    position: string
    salary: Decimal | null
    hiredDate: Date | null
    created: Date
    createdBy: number
    modified: Date | null
    modifiedBy: number | null
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    position?: boolean
    salary?: boolean
    hiredDate?: boolean
    created?: boolean
    createdBy?: boolean
    modified?: boolean
    modifiedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workSchedules?: boolean | Employee$workSchedulesArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>



  export type EmployeeSelectScalar = {
    id?: boolean
    userId?: boolean
    position?: boolean
    salary?: boolean
    hiredDate?: boolean
    created?: boolean
    createdBy?: boolean
    modified?: boolean
    modifiedBy?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "position" | "salary" | "hiredDate" | "created" | "createdBy" | "modified" | "modifiedBy", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workSchedules?: boolean | Employee$workSchedulesArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      workSchedules: Prisma.$WorkSchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      position: string
      salary: Prisma.Decimal | null
      hiredDate: Date | null
      created: Date
      createdBy: number
      modified: Date | null
      modifiedBy: number | null
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
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
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workSchedules<T extends Employee$workSchedulesArgs<ExtArgs> = {}>(args?: Subset<T, Employee$workSchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'Int'>
    readonly userId: FieldRef<"Employee", 'Int'>
    readonly position: FieldRef<"Employee", 'String'>
    readonly salary: FieldRef<"Employee", 'Decimal'>
    readonly hiredDate: FieldRef<"Employee", 'DateTime'>
    readonly created: FieldRef<"Employee", 'DateTime'>
    readonly createdBy: FieldRef<"Employee", 'Int'>
    readonly modified: FieldRef<"Employee", 'DateTime'>
    readonly modifiedBy: FieldRef<"Employee", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.workSchedules
   */
  export type Employee$workSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    where?: WorkScheduleWhereInput
    orderBy?: WorkScheduleOrderByWithRelationInput | WorkScheduleOrderByWithRelationInput[]
    cursor?: WorkScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkScheduleScalarFieldEnum | WorkScheduleScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model WorkSchedule
   */

  export type AggregateWorkSchedule = {
    _count: WorkScheduleCountAggregateOutputType | null
    _avg: WorkScheduleAvgAggregateOutputType | null
    _sum: WorkScheduleSumAggregateOutputType | null
    _min: WorkScheduleMinAggregateOutputType | null
    _max: WorkScheduleMaxAggregateOutputType | null
  }

  export type WorkScheduleAvgAggregateOutputType = {
    id: number | null
    employeeId: number | null
  }

  export type WorkScheduleSumAggregateOutputType = {
    id: number | null
    employeeId: number | null
  }

  export type WorkScheduleMinAggregateOutputType = {
    id: number | null
    employeeId: number | null
    workDate: Date | null
    startTime: Date | null
    endTime: Date | null
    status: string | null
  }

  export type WorkScheduleMaxAggregateOutputType = {
    id: number | null
    employeeId: number | null
    workDate: Date | null
    startTime: Date | null
    endTime: Date | null
    status: string | null
  }

  export type WorkScheduleCountAggregateOutputType = {
    id: number
    employeeId: number
    workDate: number
    startTime: number
    endTime: number
    status: number
    _all: number
  }


  export type WorkScheduleAvgAggregateInputType = {
    id?: true
    employeeId?: true
  }

  export type WorkScheduleSumAggregateInputType = {
    id?: true
    employeeId?: true
  }

  export type WorkScheduleMinAggregateInputType = {
    id?: true
    employeeId?: true
    workDate?: true
    startTime?: true
    endTime?: true
    status?: true
  }

  export type WorkScheduleMaxAggregateInputType = {
    id?: true
    employeeId?: true
    workDate?: true
    startTime?: true
    endTime?: true
    status?: true
  }

  export type WorkScheduleCountAggregateInputType = {
    id?: true
    employeeId?: true
    workDate?: true
    startTime?: true
    endTime?: true
    status?: true
    _all?: true
  }

  export type WorkScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkSchedule to aggregate.
     */
    where?: WorkScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkSchedules to fetch.
     */
    orderBy?: WorkScheduleOrderByWithRelationInput | WorkScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkSchedules
    **/
    _count?: true | WorkScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkScheduleMaxAggregateInputType
  }

  export type GetWorkScheduleAggregateType<T extends WorkScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkSchedule[P]>
      : GetScalarType<T[P], AggregateWorkSchedule[P]>
  }




  export type WorkScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkScheduleWhereInput
    orderBy?: WorkScheduleOrderByWithAggregationInput | WorkScheduleOrderByWithAggregationInput[]
    by: WorkScheduleScalarFieldEnum[] | WorkScheduleScalarFieldEnum
    having?: WorkScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkScheduleCountAggregateInputType | true
    _avg?: WorkScheduleAvgAggregateInputType
    _sum?: WorkScheduleSumAggregateInputType
    _min?: WorkScheduleMinAggregateInputType
    _max?: WorkScheduleMaxAggregateInputType
  }

  export type WorkScheduleGroupByOutputType = {
    id: number
    employeeId: number
    workDate: Date
    startTime: Date
    endTime: Date
    status: string
    _count: WorkScheduleCountAggregateOutputType | null
    _avg: WorkScheduleAvgAggregateOutputType | null
    _sum: WorkScheduleSumAggregateOutputType | null
    _min: WorkScheduleMinAggregateOutputType | null
    _max: WorkScheduleMaxAggregateOutputType | null
  }

  type GetWorkScheduleGroupByPayload<T extends WorkScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], WorkScheduleGroupByOutputType[P]>
        }
      >
    >


  export type WorkScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    workDate?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    calendar?: boolean | WorkSchedule$calendarArgs<ExtArgs>
    _count?: boolean | WorkScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workSchedule"]>



  export type WorkScheduleSelectScalar = {
    id?: boolean
    employeeId?: boolean
    workDate?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
  }

  export type WorkScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "workDate" | "startTime" | "endTime" | "status", ExtArgs["result"]["workSchedule"]>
  export type WorkScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    calendar?: boolean | WorkSchedule$calendarArgs<ExtArgs>
    _count?: boolean | WorkScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $WorkSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkSchedule"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      calendar: Prisma.$ProductionCalendarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      employeeId: number
      workDate: Date
      startTime: Date
      endTime: Date
      status: string
    }, ExtArgs["result"]["workSchedule"]>
    composites: {}
  }

  type WorkScheduleGetPayload<S extends boolean | null | undefined | WorkScheduleDefaultArgs> = $Result.GetResult<Prisma.$WorkSchedulePayload, S>

  type WorkScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkScheduleCountAggregateInputType | true
    }

  export interface WorkScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkSchedule'], meta: { name: 'WorkSchedule' } }
    /**
     * Find zero or one WorkSchedule that matches the filter.
     * @param {WorkScheduleFindUniqueArgs} args - Arguments to find a WorkSchedule
     * @example
     * // Get one WorkSchedule
     * const workSchedule = await prisma.workSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkScheduleFindUniqueArgs>(args: SelectSubset<T, WorkScheduleFindUniqueArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkScheduleFindUniqueOrThrowArgs} args - Arguments to find a WorkSchedule
     * @example
     * // Get one WorkSchedule
     * const workSchedule = await prisma.workSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkScheduleFindFirstArgs} args - Arguments to find a WorkSchedule
     * @example
     * // Get one WorkSchedule
     * const workSchedule = await prisma.workSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkScheduleFindFirstArgs>(args?: SelectSubset<T, WorkScheduleFindFirstArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkScheduleFindFirstOrThrowArgs} args - Arguments to find a WorkSchedule
     * @example
     * // Get one WorkSchedule
     * const workSchedule = await prisma.workSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkSchedules
     * const workSchedules = await prisma.workSchedule.findMany()
     * 
     * // Get first 10 WorkSchedules
     * const workSchedules = await prisma.workSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workScheduleWithIdOnly = await prisma.workSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkScheduleFindManyArgs>(args?: SelectSubset<T, WorkScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkSchedule.
     * @param {WorkScheduleCreateArgs} args - Arguments to create a WorkSchedule.
     * @example
     * // Create one WorkSchedule
     * const WorkSchedule = await prisma.workSchedule.create({
     *   data: {
     *     // ... data to create a WorkSchedule
     *   }
     * })
     * 
     */
    create<T extends WorkScheduleCreateArgs>(args: SelectSubset<T, WorkScheduleCreateArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkSchedules.
     * @param {WorkScheduleCreateManyArgs} args - Arguments to create many WorkSchedules.
     * @example
     * // Create many WorkSchedules
     * const workSchedule = await prisma.workSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkScheduleCreateManyArgs>(args?: SelectSubset<T, WorkScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WorkSchedule.
     * @param {WorkScheduleDeleteArgs} args - Arguments to delete one WorkSchedule.
     * @example
     * // Delete one WorkSchedule
     * const WorkSchedule = await prisma.workSchedule.delete({
     *   where: {
     *     // ... filter to delete one WorkSchedule
     *   }
     * })
     * 
     */
    delete<T extends WorkScheduleDeleteArgs>(args: SelectSubset<T, WorkScheduleDeleteArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkSchedule.
     * @param {WorkScheduleUpdateArgs} args - Arguments to update one WorkSchedule.
     * @example
     * // Update one WorkSchedule
     * const workSchedule = await prisma.workSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkScheduleUpdateArgs>(args: SelectSubset<T, WorkScheduleUpdateArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkSchedules.
     * @param {WorkScheduleDeleteManyArgs} args - Arguments to filter WorkSchedules to delete.
     * @example
     * // Delete a few WorkSchedules
     * const { count } = await prisma.workSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkScheduleDeleteManyArgs>(args?: SelectSubset<T, WorkScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkSchedules
     * const workSchedule = await prisma.workSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkScheduleUpdateManyArgs>(args: SelectSubset<T, WorkScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkSchedule.
     * @param {WorkScheduleUpsertArgs} args - Arguments to update or create a WorkSchedule.
     * @example
     * // Update or create a WorkSchedule
     * const workSchedule = await prisma.workSchedule.upsert({
     *   create: {
     *     // ... data to create a WorkSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkSchedule we want to update
     *   }
     * })
     */
    upsert<T extends WorkScheduleUpsertArgs>(args: SelectSubset<T, WorkScheduleUpsertArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkScheduleCountArgs} args - Arguments to filter WorkSchedules to count.
     * @example
     * // Count the number of WorkSchedules
     * const count = await prisma.workSchedule.count({
     *   where: {
     *     // ... the filter for the WorkSchedules we want to count
     *   }
     * })
    **/
    count<T extends WorkScheduleCountArgs>(
      args?: Subset<T, WorkScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkScheduleAggregateArgs>(args: Subset<T, WorkScheduleAggregateArgs>): Prisma.PrismaPromise<GetWorkScheduleAggregateType<T>>

    /**
     * Group by WorkSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkScheduleGroupByArgs} args - Group by arguments.
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
      T extends WorkScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkScheduleGroupByArgs['orderBy'] }
        : { orderBy?: WorkScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkSchedule model
   */
  readonly fields: WorkScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    calendar<T extends WorkSchedule$calendarArgs<ExtArgs> = {}>(args?: Subset<T, WorkSchedule$calendarArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionCalendarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the WorkSchedule model
   */
  interface WorkScheduleFieldRefs {
    readonly id: FieldRef<"WorkSchedule", 'Int'>
    readonly employeeId: FieldRef<"WorkSchedule", 'Int'>
    readonly workDate: FieldRef<"WorkSchedule", 'DateTime'>
    readonly startTime: FieldRef<"WorkSchedule", 'DateTime'>
    readonly endTime: FieldRef<"WorkSchedule", 'DateTime'>
    readonly status: FieldRef<"WorkSchedule", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WorkSchedule findUnique
   */
  export type WorkScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * Filter, which WorkSchedule to fetch.
     */
    where: WorkScheduleWhereUniqueInput
  }

  /**
   * WorkSchedule findUniqueOrThrow
   */
  export type WorkScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * Filter, which WorkSchedule to fetch.
     */
    where: WorkScheduleWhereUniqueInput
  }

  /**
   * WorkSchedule findFirst
   */
  export type WorkScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * Filter, which WorkSchedule to fetch.
     */
    where?: WorkScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkSchedules to fetch.
     */
    orderBy?: WorkScheduleOrderByWithRelationInput | WorkScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkSchedules.
     */
    cursor?: WorkScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkSchedules.
     */
    distinct?: WorkScheduleScalarFieldEnum | WorkScheduleScalarFieldEnum[]
  }

  /**
   * WorkSchedule findFirstOrThrow
   */
  export type WorkScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * Filter, which WorkSchedule to fetch.
     */
    where?: WorkScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkSchedules to fetch.
     */
    orderBy?: WorkScheduleOrderByWithRelationInput | WorkScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkSchedules.
     */
    cursor?: WorkScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkSchedules.
     */
    distinct?: WorkScheduleScalarFieldEnum | WorkScheduleScalarFieldEnum[]
  }

  /**
   * WorkSchedule findMany
   */
  export type WorkScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * Filter, which WorkSchedules to fetch.
     */
    where?: WorkScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkSchedules to fetch.
     */
    orderBy?: WorkScheduleOrderByWithRelationInput | WorkScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkSchedules.
     */
    cursor?: WorkScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkSchedules.
     */
    skip?: number
    distinct?: WorkScheduleScalarFieldEnum | WorkScheduleScalarFieldEnum[]
  }

  /**
   * WorkSchedule create
   */
  export type WorkScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkSchedule.
     */
    data: XOR<WorkScheduleCreateInput, WorkScheduleUncheckedCreateInput>
  }

  /**
   * WorkSchedule createMany
   */
  export type WorkScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkSchedules.
     */
    data: WorkScheduleCreateManyInput | WorkScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkSchedule update
   */
  export type WorkScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkSchedule.
     */
    data: XOR<WorkScheduleUpdateInput, WorkScheduleUncheckedUpdateInput>
    /**
     * Choose, which WorkSchedule to update.
     */
    where: WorkScheduleWhereUniqueInput
  }

  /**
   * WorkSchedule updateMany
   */
  export type WorkScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkSchedules.
     */
    data: XOR<WorkScheduleUpdateManyMutationInput, WorkScheduleUncheckedUpdateManyInput>
    /**
     * Filter which WorkSchedules to update
     */
    where?: WorkScheduleWhereInput
    /**
     * Limit how many WorkSchedules to update.
     */
    limit?: number
  }

  /**
   * WorkSchedule upsert
   */
  export type WorkScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkSchedule to update in case it exists.
     */
    where: WorkScheduleWhereUniqueInput
    /**
     * In case the WorkSchedule found by the `where` argument doesn't exist, create a new WorkSchedule with this data.
     */
    create: XOR<WorkScheduleCreateInput, WorkScheduleUncheckedCreateInput>
    /**
     * In case the WorkSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkScheduleUpdateInput, WorkScheduleUncheckedUpdateInput>
  }

  /**
   * WorkSchedule delete
   */
  export type WorkScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * Filter which WorkSchedule to delete.
     */
    where: WorkScheduleWhereUniqueInput
  }

  /**
   * WorkSchedule deleteMany
   */
  export type WorkScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkSchedules to delete
     */
    where?: WorkScheduleWhereInput
    /**
     * Limit how many WorkSchedules to delete.
     */
    limit?: number
  }

  /**
   * WorkSchedule.calendar
   */
  export type WorkSchedule$calendarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionCalendar
     */
    select?: ProductionCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionCalendar
     */
    omit?: ProductionCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionCalendarInclude<ExtArgs> | null
    where?: ProductionCalendarWhereInput
    orderBy?: ProductionCalendarOrderByWithRelationInput | ProductionCalendarOrderByWithRelationInput[]
    cursor?: ProductionCalendarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductionCalendarScalarFieldEnum | ProductionCalendarScalarFieldEnum[]
  }

  /**
   * WorkSchedule without action
   */
  export type WorkScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
  }


  /**
   * Model ProductionCalendar
   */

  export type AggregateProductionCalendar = {
    _count: ProductionCalendarCountAggregateOutputType | null
    _avg: ProductionCalendarAvgAggregateOutputType | null
    _sum: ProductionCalendarSumAggregateOutputType | null
    _min: ProductionCalendarMinAggregateOutputType | null
    _max: ProductionCalendarMaxAggregateOutputType | null
  }

  export type ProductionCalendarAvgAggregateOutputType = {
    id: number | null
    workScheduleId: number | null
    ordersId: number | null
  }

  export type ProductionCalendarSumAggregateOutputType = {
    id: number | null
    workScheduleId: number | null
    ordersId: number | null
  }

  export type ProductionCalendarMinAggregateOutputType = {
    id: number | null
    workScheduleId: number | null
    ordersId: number | null
    workDate: Date | null
    isHoliday: boolean | null
  }

  export type ProductionCalendarMaxAggregateOutputType = {
    id: number | null
    workScheduleId: number | null
    ordersId: number | null
    workDate: Date | null
    isHoliday: boolean | null
  }

  export type ProductionCalendarCountAggregateOutputType = {
    id: number
    workScheduleId: number
    ordersId: number
    workDate: number
    isHoliday: number
    _all: number
  }


  export type ProductionCalendarAvgAggregateInputType = {
    id?: true
    workScheduleId?: true
    ordersId?: true
  }

  export type ProductionCalendarSumAggregateInputType = {
    id?: true
    workScheduleId?: true
    ordersId?: true
  }

  export type ProductionCalendarMinAggregateInputType = {
    id?: true
    workScheduleId?: true
    ordersId?: true
    workDate?: true
    isHoliday?: true
  }

  export type ProductionCalendarMaxAggregateInputType = {
    id?: true
    workScheduleId?: true
    ordersId?: true
    workDate?: true
    isHoliday?: true
  }

  export type ProductionCalendarCountAggregateInputType = {
    id?: true
    workScheduleId?: true
    ordersId?: true
    workDate?: true
    isHoliday?: true
    _all?: true
  }

  export type ProductionCalendarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductionCalendar to aggregate.
     */
    where?: ProductionCalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionCalendars to fetch.
     */
    orderBy?: ProductionCalendarOrderByWithRelationInput | ProductionCalendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductionCalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionCalendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionCalendars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductionCalendars
    **/
    _count?: true | ProductionCalendarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductionCalendarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductionCalendarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductionCalendarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductionCalendarMaxAggregateInputType
  }

  export type GetProductionCalendarAggregateType<T extends ProductionCalendarAggregateArgs> = {
        [P in keyof T & keyof AggregateProductionCalendar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductionCalendar[P]>
      : GetScalarType<T[P], AggregateProductionCalendar[P]>
  }




  export type ProductionCalendarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductionCalendarWhereInput
    orderBy?: ProductionCalendarOrderByWithAggregationInput | ProductionCalendarOrderByWithAggregationInput[]
    by: ProductionCalendarScalarFieldEnum[] | ProductionCalendarScalarFieldEnum
    having?: ProductionCalendarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductionCalendarCountAggregateInputType | true
    _avg?: ProductionCalendarAvgAggregateInputType
    _sum?: ProductionCalendarSumAggregateInputType
    _min?: ProductionCalendarMinAggregateInputType
    _max?: ProductionCalendarMaxAggregateInputType
  }

  export type ProductionCalendarGroupByOutputType = {
    id: number
    workScheduleId: number
    ordersId: number | null
    workDate: Date
    isHoliday: boolean
    _count: ProductionCalendarCountAggregateOutputType | null
    _avg: ProductionCalendarAvgAggregateOutputType | null
    _sum: ProductionCalendarSumAggregateOutputType | null
    _min: ProductionCalendarMinAggregateOutputType | null
    _max: ProductionCalendarMaxAggregateOutputType | null
  }

  type GetProductionCalendarGroupByPayload<T extends ProductionCalendarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductionCalendarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductionCalendarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductionCalendarGroupByOutputType[P]>
            : GetScalarType<T[P], ProductionCalendarGroupByOutputType[P]>
        }
      >
    >


  export type ProductionCalendarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workScheduleId?: boolean
    ordersId?: boolean
    workDate?: boolean
    isHoliday?: boolean
    workSchedule?: boolean | WorkScheduleDefaultArgs<ExtArgs>
    orders?: boolean | ProductionCalendar$ordersArgs<ExtArgs>
  }, ExtArgs["result"]["productionCalendar"]>



  export type ProductionCalendarSelectScalar = {
    id?: boolean
    workScheduleId?: boolean
    ordersId?: boolean
    workDate?: boolean
    isHoliday?: boolean
  }

  export type ProductionCalendarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workScheduleId" | "ordersId" | "workDate" | "isHoliday", ExtArgs["result"]["productionCalendar"]>
  export type ProductionCalendarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workSchedule?: boolean | WorkScheduleDefaultArgs<ExtArgs>
    orders?: boolean | ProductionCalendar$ordersArgs<ExtArgs>
  }

  export type $ProductionCalendarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductionCalendar"
    objects: {
      workSchedule: Prisma.$WorkSchedulePayload<ExtArgs>
      orders: Prisma.$RepairOrderPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      workScheduleId: number
      ordersId: number | null
      workDate: Date
      isHoliday: boolean
    }, ExtArgs["result"]["productionCalendar"]>
    composites: {}
  }

  type ProductionCalendarGetPayload<S extends boolean | null | undefined | ProductionCalendarDefaultArgs> = $Result.GetResult<Prisma.$ProductionCalendarPayload, S>

  type ProductionCalendarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductionCalendarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductionCalendarCountAggregateInputType | true
    }

  export interface ProductionCalendarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductionCalendar'], meta: { name: 'ProductionCalendar' } }
    /**
     * Find zero or one ProductionCalendar that matches the filter.
     * @param {ProductionCalendarFindUniqueArgs} args - Arguments to find a ProductionCalendar
     * @example
     * // Get one ProductionCalendar
     * const productionCalendar = await prisma.productionCalendar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductionCalendarFindUniqueArgs>(args: SelectSubset<T, ProductionCalendarFindUniqueArgs<ExtArgs>>): Prisma__ProductionCalendarClient<$Result.GetResult<Prisma.$ProductionCalendarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductionCalendar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductionCalendarFindUniqueOrThrowArgs} args - Arguments to find a ProductionCalendar
     * @example
     * // Get one ProductionCalendar
     * const productionCalendar = await prisma.productionCalendar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductionCalendarFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductionCalendarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductionCalendarClient<$Result.GetResult<Prisma.$ProductionCalendarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductionCalendar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionCalendarFindFirstArgs} args - Arguments to find a ProductionCalendar
     * @example
     * // Get one ProductionCalendar
     * const productionCalendar = await prisma.productionCalendar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductionCalendarFindFirstArgs>(args?: SelectSubset<T, ProductionCalendarFindFirstArgs<ExtArgs>>): Prisma__ProductionCalendarClient<$Result.GetResult<Prisma.$ProductionCalendarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductionCalendar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionCalendarFindFirstOrThrowArgs} args - Arguments to find a ProductionCalendar
     * @example
     * // Get one ProductionCalendar
     * const productionCalendar = await prisma.productionCalendar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductionCalendarFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductionCalendarFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductionCalendarClient<$Result.GetResult<Prisma.$ProductionCalendarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductionCalendars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionCalendarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductionCalendars
     * const productionCalendars = await prisma.productionCalendar.findMany()
     * 
     * // Get first 10 ProductionCalendars
     * const productionCalendars = await prisma.productionCalendar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productionCalendarWithIdOnly = await prisma.productionCalendar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductionCalendarFindManyArgs>(args?: SelectSubset<T, ProductionCalendarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionCalendarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductionCalendar.
     * @param {ProductionCalendarCreateArgs} args - Arguments to create a ProductionCalendar.
     * @example
     * // Create one ProductionCalendar
     * const ProductionCalendar = await prisma.productionCalendar.create({
     *   data: {
     *     // ... data to create a ProductionCalendar
     *   }
     * })
     * 
     */
    create<T extends ProductionCalendarCreateArgs>(args: SelectSubset<T, ProductionCalendarCreateArgs<ExtArgs>>): Prisma__ProductionCalendarClient<$Result.GetResult<Prisma.$ProductionCalendarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductionCalendars.
     * @param {ProductionCalendarCreateManyArgs} args - Arguments to create many ProductionCalendars.
     * @example
     * // Create many ProductionCalendars
     * const productionCalendar = await prisma.productionCalendar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductionCalendarCreateManyArgs>(args?: SelectSubset<T, ProductionCalendarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductionCalendar.
     * @param {ProductionCalendarDeleteArgs} args - Arguments to delete one ProductionCalendar.
     * @example
     * // Delete one ProductionCalendar
     * const ProductionCalendar = await prisma.productionCalendar.delete({
     *   where: {
     *     // ... filter to delete one ProductionCalendar
     *   }
     * })
     * 
     */
    delete<T extends ProductionCalendarDeleteArgs>(args: SelectSubset<T, ProductionCalendarDeleteArgs<ExtArgs>>): Prisma__ProductionCalendarClient<$Result.GetResult<Prisma.$ProductionCalendarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductionCalendar.
     * @param {ProductionCalendarUpdateArgs} args - Arguments to update one ProductionCalendar.
     * @example
     * // Update one ProductionCalendar
     * const productionCalendar = await prisma.productionCalendar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductionCalendarUpdateArgs>(args: SelectSubset<T, ProductionCalendarUpdateArgs<ExtArgs>>): Prisma__ProductionCalendarClient<$Result.GetResult<Prisma.$ProductionCalendarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductionCalendars.
     * @param {ProductionCalendarDeleteManyArgs} args - Arguments to filter ProductionCalendars to delete.
     * @example
     * // Delete a few ProductionCalendars
     * const { count } = await prisma.productionCalendar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductionCalendarDeleteManyArgs>(args?: SelectSubset<T, ProductionCalendarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductionCalendars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionCalendarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductionCalendars
     * const productionCalendar = await prisma.productionCalendar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductionCalendarUpdateManyArgs>(args: SelectSubset<T, ProductionCalendarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductionCalendar.
     * @param {ProductionCalendarUpsertArgs} args - Arguments to update or create a ProductionCalendar.
     * @example
     * // Update or create a ProductionCalendar
     * const productionCalendar = await prisma.productionCalendar.upsert({
     *   create: {
     *     // ... data to create a ProductionCalendar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductionCalendar we want to update
     *   }
     * })
     */
    upsert<T extends ProductionCalendarUpsertArgs>(args: SelectSubset<T, ProductionCalendarUpsertArgs<ExtArgs>>): Prisma__ProductionCalendarClient<$Result.GetResult<Prisma.$ProductionCalendarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductionCalendars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionCalendarCountArgs} args - Arguments to filter ProductionCalendars to count.
     * @example
     * // Count the number of ProductionCalendars
     * const count = await prisma.productionCalendar.count({
     *   where: {
     *     // ... the filter for the ProductionCalendars we want to count
     *   }
     * })
    **/
    count<T extends ProductionCalendarCountArgs>(
      args?: Subset<T, ProductionCalendarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductionCalendarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductionCalendar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionCalendarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductionCalendarAggregateArgs>(args: Subset<T, ProductionCalendarAggregateArgs>): Prisma.PrismaPromise<GetProductionCalendarAggregateType<T>>

    /**
     * Group by ProductionCalendar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionCalendarGroupByArgs} args - Group by arguments.
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
      T extends ProductionCalendarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductionCalendarGroupByArgs['orderBy'] }
        : { orderBy?: ProductionCalendarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductionCalendarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductionCalendarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductionCalendar model
   */
  readonly fields: ProductionCalendarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductionCalendar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductionCalendarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workSchedule<T extends WorkScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkScheduleDefaultArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orders<T extends ProductionCalendar$ordersArgs<ExtArgs> = {}>(args?: Subset<T, ProductionCalendar$ordersArgs<ExtArgs>>): Prisma__RepairOrderClient<$Result.GetResult<Prisma.$RepairOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductionCalendar model
   */
  interface ProductionCalendarFieldRefs {
    readonly id: FieldRef<"ProductionCalendar", 'Int'>
    readonly workScheduleId: FieldRef<"ProductionCalendar", 'Int'>
    readonly ordersId: FieldRef<"ProductionCalendar", 'Int'>
    readonly workDate: FieldRef<"ProductionCalendar", 'DateTime'>
    readonly isHoliday: FieldRef<"ProductionCalendar", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ProductionCalendar findUnique
   */
  export type ProductionCalendarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionCalendar
     */
    select?: ProductionCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionCalendar
     */
    omit?: ProductionCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionCalendarInclude<ExtArgs> | null
    /**
     * Filter, which ProductionCalendar to fetch.
     */
    where: ProductionCalendarWhereUniqueInput
  }

  /**
   * ProductionCalendar findUniqueOrThrow
   */
  export type ProductionCalendarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionCalendar
     */
    select?: ProductionCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionCalendar
     */
    omit?: ProductionCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionCalendarInclude<ExtArgs> | null
    /**
     * Filter, which ProductionCalendar to fetch.
     */
    where: ProductionCalendarWhereUniqueInput
  }

  /**
   * ProductionCalendar findFirst
   */
  export type ProductionCalendarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionCalendar
     */
    select?: ProductionCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionCalendar
     */
    omit?: ProductionCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionCalendarInclude<ExtArgs> | null
    /**
     * Filter, which ProductionCalendar to fetch.
     */
    where?: ProductionCalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionCalendars to fetch.
     */
    orderBy?: ProductionCalendarOrderByWithRelationInput | ProductionCalendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductionCalendars.
     */
    cursor?: ProductionCalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionCalendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionCalendars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductionCalendars.
     */
    distinct?: ProductionCalendarScalarFieldEnum | ProductionCalendarScalarFieldEnum[]
  }

  /**
   * ProductionCalendar findFirstOrThrow
   */
  export type ProductionCalendarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionCalendar
     */
    select?: ProductionCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionCalendar
     */
    omit?: ProductionCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionCalendarInclude<ExtArgs> | null
    /**
     * Filter, which ProductionCalendar to fetch.
     */
    where?: ProductionCalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionCalendars to fetch.
     */
    orderBy?: ProductionCalendarOrderByWithRelationInput | ProductionCalendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductionCalendars.
     */
    cursor?: ProductionCalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionCalendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionCalendars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductionCalendars.
     */
    distinct?: ProductionCalendarScalarFieldEnum | ProductionCalendarScalarFieldEnum[]
  }

  /**
   * ProductionCalendar findMany
   */
  export type ProductionCalendarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionCalendar
     */
    select?: ProductionCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionCalendar
     */
    omit?: ProductionCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionCalendarInclude<ExtArgs> | null
    /**
     * Filter, which ProductionCalendars to fetch.
     */
    where?: ProductionCalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionCalendars to fetch.
     */
    orderBy?: ProductionCalendarOrderByWithRelationInput | ProductionCalendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductionCalendars.
     */
    cursor?: ProductionCalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionCalendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionCalendars.
     */
    skip?: number
    distinct?: ProductionCalendarScalarFieldEnum | ProductionCalendarScalarFieldEnum[]
  }

  /**
   * ProductionCalendar create
   */
  export type ProductionCalendarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionCalendar
     */
    select?: ProductionCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionCalendar
     */
    omit?: ProductionCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionCalendarInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductionCalendar.
     */
    data: XOR<ProductionCalendarCreateInput, ProductionCalendarUncheckedCreateInput>
  }

  /**
   * ProductionCalendar createMany
   */
  export type ProductionCalendarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductionCalendars.
     */
    data: ProductionCalendarCreateManyInput | ProductionCalendarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductionCalendar update
   */
  export type ProductionCalendarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionCalendar
     */
    select?: ProductionCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionCalendar
     */
    omit?: ProductionCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionCalendarInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductionCalendar.
     */
    data: XOR<ProductionCalendarUpdateInput, ProductionCalendarUncheckedUpdateInput>
    /**
     * Choose, which ProductionCalendar to update.
     */
    where: ProductionCalendarWhereUniqueInput
  }

  /**
   * ProductionCalendar updateMany
   */
  export type ProductionCalendarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductionCalendars.
     */
    data: XOR<ProductionCalendarUpdateManyMutationInput, ProductionCalendarUncheckedUpdateManyInput>
    /**
     * Filter which ProductionCalendars to update
     */
    where?: ProductionCalendarWhereInput
    /**
     * Limit how many ProductionCalendars to update.
     */
    limit?: number
  }

  /**
   * ProductionCalendar upsert
   */
  export type ProductionCalendarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionCalendar
     */
    select?: ProductionCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionCalendar
     */
    omit?: ProductionCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionCalendarInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductionCalendar to update in case it exists.
     */
    where: ProductionCalendarWhereUniqueInput
    /**
     * In case the ProductionCalendar found by the `where` argument doesn't exist, create a new ProductionCalendar with this data.
     */
    create: XOR<ProductionCalendarCreateInput, ProductionCalendarUncheckedCreateInput>
    /**
     * In case the ProductionCalendar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductionCalendarUpdateInput, ProductionCalendarUncheckedUpdateInput>
  }

  /**
   * ProductionCalendar delete
   */
  export type ProductionCalendarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionCalendar
     */
    select?: ProductionCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionCalendar
     */
    omit?: ProductionCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionCalendarInclude<ExtArgs> | null
    /**
     * Filter which ProductionCalendar to delete.
     */
    where: ProductionCalendarWhereUniqueInput
  }

  /**
   * ProductionCalendar deleteMany
   */
  export type ProductionCalendarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductionCalendars to delete
     */
    where?: ProductionCalendarWhereInput
    /**
     * Limit how many ProductionCalendars to delete.
     */
    limit?: number
  }

  /**
   * ProductionCalendar.orders
   */
  export type ProductionCalendar$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairOrder
     */
    select?: RepairOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairOrder
     */
    omit?: RepairOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairOrderInclude<ExtArgs> | null
    where?: RepairOrderWhereInput
  }

  /**
   * ProductionCalendar without action
   */
  export type ProductionCalendarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionCalendar
     */
    select?: ProductionCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionCalendar
     */
    omit?: ProductionCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionCalendarInclude<ExtArgs> | null
  }


  /**
   * Model Car
   */

  export type AggregateCar = {
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  export type CarAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    brandId: number | null
    year: number | null
  }

  export type CarSumAggregateOutputType = {
    id: number | null
    userId: number | null
    brandId: number | null
    year: number | null
  }

  export type CarMinAggregateOutputType = {
    id: number | null
    userId: number | null
    brandId: number | null
    model: string | null
    year: number | null
    vin: string | null
    engineType: string | null
    registrationNumber: string | null
    pts: string | null
    sts: string | null
    status: string | null
  }

  export type CarMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    brandId: number | null
    model: string | null
    year: number | null
    vin: string | null
    engineType: string | null
    registrationNumber: string | null
    pts: string | null
    sts: string | null
    status: string | null
  }

  export type CarCountAggregateOutputType = {
    id: number
    userId: number
    brandId: number
    model: number
    year: number
    vin: number
    engineType: number
    registrationNumber: number
    pts: number
    sts: number
    status: number
    _all: number
  }


  export type CarAvgAggregateInputType = {
    id?: true
    userId?: true
    brandId?: true
    year?: true
  }

  export type CarSumAggregateInputType = {
    id?: true
    userId?: true
    brandId?: true
    year?: true
  }

  export type CarMinAggregateInputType = {
    id?: true
    userId?: true
    brandId?: true
    model?: true
    year?: true
    vin?: true
    engineType?: true
    registrationNumber?: true
    pts?: true
    sts?: true
    status?: true
  }

  export type CarMaxAggregateInputType = {
    id?: true
    userId?: true
    brandId?: true
    model?: true
    year?: true
    vin?: true
    engineType?: true
    registrationNumber?: true
    pts?: true
    sts?: true
    status?: true
  }

  export type CarCountAggregateInputType = {
    id?: true
    userId?: true
    brandId?: true
    model?: true
    year?: true
    vin?: true
    engineType?: true
    registrationNumber?: true
    pts?: true
    sts?: true
    status?: true
    _all?: true
  }

  export type CarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Car to aggregate.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cars
    **/
    _count?: true | CarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarMaxAggregateInputType
  }

  export type GetCarAggregateType<T extends CarAggregateArgs> = {
        [P in keyof T & keyof AggregateCar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCar[P]>
      : GetScalarType<T[P], AggregateCar[P]>
  }




  export type CarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
    orderBy?: CarOrderByWithAggregationInput | CarOrderByWithAggregationInput[]
    by: CarScalarFieldEnum[] | CarScalarFieldEnum
    having?: CarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarCountAggregateInputType | true
    _avg?: CarAvgAggregateInputType
    _sum?: CarSumAggregateInputType
    _min?: CarMinAggregateInputType
    _max?: CarMaxAggregateInputType
  }

  export type CarGroupByOutputType = {
    id: number
    userId: number
    brandId: number
    model: string
    year: number
    vin: string
    engineType: string
    registrationNumber: string
    pts: string
    sts: string
    status: string
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  type GetCarGroupByPayload<T extends CarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarGroupByOutputType[P]>
            : GetScalarType<T[P], CarGroupByOutputType[P]>
        }
      >
    >


  export type CarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    brandId?: boolean
    model?: boolean
    year?: boolean
    vin?: boolean
    engineType?: boolean
    registrationNumber?: boolean
    pts?: boolean
    sts?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    repairOrders?: boolean | Car$repairOrdersArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>



  export type CarSelectScalar = {
    id?: boolean
    userId?: boolean
    brandId?: boolean
    model?: boolean
    year?: boolean
    vin?: boolean
    engineType?: boolean
    registrationNumber?: boolean
    pts?: boolean
    sts?: boolean
    status?: boolean
  }

  export type CarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "brandId" | "model" | "year" | "vin" | "engineType" | "registrationNumber" | "pts" | "sts" | "status", ExtArgs["result"]["car"]>
  export type CarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    repairOrders?: boolean | Car$repairOrdersArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Car"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      repairOrders: Prisma.$RepairOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      brandId: number
      model: string
      year: number
      vin: string
      engineType: string
      registrationNumber: string
      pts: string
      sts: string
      status: string
    }, ExtArgs["result"]["car"]>
    composites: {}
  }

  type CarGetPayload<S extends boolean | null | undefined | CarDefaultArgs> = $Result.GetResult<Prisma.$CarPayload, S>

  type CarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarCountAggregateInputType | true
    }

  export interface CarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Car'], meta: { name: 'Car' } }
    /**
     * Find zero or one Car that matches the filter.
     * @param {CarFindUniqueArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarFindUniqueArgs>(args: SelectSubset<T, CarFindUniqueArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Car that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarFindUniqueOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarFindUniqueOrThrowArgs>(args: SelectSubset<T, CarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarFindFirstArgs>(args?: SelectSubset<T, CarFindFirstArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarFindFirstOrThrowArgs>(args?: SelectSubset<T, CarFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cars
     * const cars = await prisma.car.findMany()
     * 
     * // Get first 10 Cars
     * const cars = await prisma.car.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carWithIdOnly = await prisma.car.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarFindManyArgs>(args?: SelectSubset<T, CarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Car.
     * @param {CarCreateArgs} args - Arguments to create a Car.
     * @example
     * // Create one Car
     * const Car = await prisma.car.create({
     *   data: {
     *     // ... data to create a Car
     *   }
     * })
     * 
     */
    create<T extends CarCreateArgs>(args: SelectSubset<T, CarCreateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cars.
     * @param {CarCreateManyArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarCreateManyArgs>(args?: SelectSubset<T, CarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Car.
     * @param {CarDeleteArgs} args - Arguments to delete one Car.
     * @example
     * // Delete one Car
     * const Car = await prisma.car.delete({
     *   where: {
     *     // ... filter to delete one Car
     *   }
     * })
     * 
     */
    delete<T extends CarDeleteArgs>(args: SelectSubset<T, CarDeleteArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Car.
     * @param {CarUpdateArgs} args - Arguments to update one Car.
     * @example
     * // Update one Car
     * const car = await prisma.car.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarUpdateArgs>(args: SelectSubset<T, CarUpdateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cars.
     * @param {CarDeleteManyArgs} args - Arguments to filter Cars to delete.
     * @example
     * // Delete a few Cars
     * const { count } = await prisma.car.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarDeleteManyArgs>(args?: SelectSubset<T, CarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarUpdateManyArgs>(args: SelectSubset<T, CarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Car.
     * @param {CarUpsertArgs} args - Arguments to update or create a Car.
     * @example
     * // Update or create a Car
     * const car = await prisma.car.upsert({
     *   create: {
     *     // ... data to create a Car
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Car we want to update
     *   }
     * })
     */
    upsert<T extends CarUpsertArgs>(args: SelectSubset<T, CarUpsertArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarCountArgs} args - Arguments to filter Cars to count.
     * @example
     * // Count the number of Cars
     * const count = await prisma.car.count({
     *   where: {
     *     // ... the filter for the Cars we want to count
     *   }
     * })
    **/
    count<T extends CarCountArgs>(
      args?: Subset<T, CarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarAggregateArgs>(args: Subset<T, CarAggregateArgs>): Prisma.PrismaPromise<GetCarAggregateType<T>>

    /**
     * Group by Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarGroupByArgs} args - Group by arguments.
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
      T extends CarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarGroupByArgs['orderBy'] }
        : { orderBy?: CarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Car model
   */
  readonly fields: CarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Car.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    repairOrders<T extends Car$repairOrdersArgs<ExtArgs> = {}>(args?: Subset<T, Car$repairOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Car model
   */
  interface CarFieldRefs {
    readonly id: FieldRef<"Car", 'Int'>
    readonly userId: FieldRef<"Car", 'Int'>
    readonly brandId: FieldRef<"Car", 'Int'>
    readonly model: FieldRef<"Car", 'String'>
    readonly year: FieldRef<"Car", 'Int'>
    readonly vin: FieldRef<"Car", 'String'>
    readonly engineType: FieldRef<"Car", 'String'>
    readonly registrationNumber: FieldRef<"Car", 'String'>
    readonly pts: FieldRef<"Car", 'String'>
    readonly sts: FieldRef<"Car", 'String'>
    readonly status: FieldRef<"Car", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Car findUnique
   */
  export type CarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findUniqueOrThrow
   */
  export type CarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findFirst
   */
  export type CarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findFirstOrThrow
   */
  export type CarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findMany
   */
  export type CarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car create
   */
  export type CarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to create a Car.
     */
    data: XOR<CarCreateInput, CarUncheckedCreateInput>
  }

  /**
   * Car createMany
   */
  export type CarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Car update
   */
  export type CarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to update a Car.
     */
    data: XOR<CarUpdateInput, CarUncheckedUpdateInput>
    /**
     * Choose, which Car to update.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car updateMany
   */
  export type CarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
  }

  /**
   * Car upsert
   */
  export type CarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The filter to search for the Car to update in case it exists.
     */
    where: CarWhereUniqueInput
    /**
     * In case the Car found by the `where` argument doesn't exist, create a new Car with this data.
     */
    create: XOR<CarCreateInput, CarUncheckedCreateInput>
    /**
     * In case the Car was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarUpdateInput, CarUncheckedUpdateInput>
  }

  /**
   * Car delete
   */
  export type CarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter which Car to delete.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car deleteMany
   */
  export type CarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cars to delete
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to delete.
     */
    limit?: number
  }

  /**
   * Car.repairOrders
   */
  export type Car$repairOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairOrder
     */
    select?: RepairOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairOrder
     */
    omit?: RepairOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairOrderInclude<ExtArgs> | null
    where?: RepairOrderWhereInput
    orderBy?: RepairOrderOrderByWithRelationInput | RepairOrderOrderByWithRelationInput[]
    cursor?: RepairOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepairOrderScalarFieldEnum | RepairOrderScalarFieldEnum[]
  }

  /**
   * Car without action
   */
  export type CarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
  }


  /**
   * Model RepairOrder
   */

  export type AggregateRepairOrder = {
    _count: RepairOrderCountAggregateOutputType | null
    _avg: RepairOrderAvgAggregateOutputType | null
    _sum: RepairOrderSumAggregateOutputType | null
    _min: RepairOrderMinAggregateOutputType | null
    _max: RepairOrderMaxAggregateOutputType | null
  }

  export type RepairOrderAvgAggregateOutputType = {
    id: number | null
    carId: number | null
    userId: number | null
    employeeId: number | null
    createdBy: number | null
    modifiedBy: number | null
  }

  export type RepairOrderSumAggregateOutputType = {
    id: number | null
    carId: number | null
    userId: number | null
    employeeId: number | null
    createdBy: number | null
    modifiedBy: number | null
  }

  export type RepairOrderMinAggregateOutputType = {
    id: number | null
    carId: number | null
    userId: number | null
    employeeId: number | null
    status: string | null
    materials: string | null
    createdAt: Date | null
    createdBy: number | null
    modifiedBy: number | null
  }

  export type RepairOrderMaxAggregateOutputType = {
    id: number | null
    carId: number | null
    userId: number | null
    employeeId: number | null
    status: string | null
    materials: string | null
    createdAt: Date | null
    createdBy: number | null
    modifiedBy: number | null
  }

  export type RepairOrderCountAggregateOutputType = {
    id: number
    carId: number
    userId: number
    employeeId: number
    status: number
    materials: number
    createdAt: number
    createdBy: number
    modifiedBy: number
    _all: number
  }


  export type RepairOrderAvgAggregateInputType = {
    id?: true
    carId?: true
    userId?: true
    employeeId?: true
    createdBy?: true
    modifiedBy?: true
  }

  export type RepairOrderSumAggregateInputType = {
    id?: true
    carId?: true
    userId?: true
    employeeId?: true
    createdBy?: true
    modifiedBy?: true
  }

  export type RepairOrderMinAggregateInputType = {
    id?: true
    carId?: true
    userId?: true
    employeeId?: true
    status?: true
    materials?: true
    createdAt?: true
    createdBy?: true
    modifiedBy?: true
  }

  export type RepairOrderMaxAggregateInputType = {
    id?: true
    carId?: true
    userId?: true
    employeeId?: true
    status?: true
    materials?: true
    createdAt?: true
    createdBy?: true
    modifiedBy?: true
  }

  export type RepairOrderCountAggregateInputType = {
    id?: true
    carId?: true
    userId?: true
    employeeId?: true
    status?: true
    materials?: true
    createdAt?: true
    createdBy?: true
    modifiedBy?: true
    _all?: true
  }

  export type RepairOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RepairOrder to aggregate.
     */
    where?: RepairOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairOrders to fetch.
     */
    orderBy?: RepairOrderOrderByWithRelationInput | RepairOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepairOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RepairOrders
    **/
    _count?: true | RepairOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RepairOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RepairOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepairOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepairOrderMaxAggregateInputType
  }

  export type GetRepairOrderAggregateType<T extends RepairOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateRepairOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepairOrder[P]>
      : GetScalarType<T[P], AggregateRepairOrder[P]>
  }




  export type RepairOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepairOrderWhereInput
    orderBy?: RepairOrderOrderByWithAggregationInput | RepairOrderOrderByWithAggregationInput[]
    by: RepairOrderScalarFieldEnum[] | RepairOrderScalarFieldEnum
    having?: RepairOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepairOrderCountAggregateInputType | true
    _avg?: RepairOrderAvgAggregateInputType
    _sum?: RepairOrderSumAggregateInputType
    _min?: RepairOrderMinAggregateInputType
    _max?: RepairOrderMaxAggregateInputType
  }

  export type RepairOrderGroupByOutputType = {
    id: number
    carId: number
    userId: number
    employeeId: number
    status: string
    materials: string
    createdAt: Date
    createdBy: number
    modifiedBy: number
    _count: RepairOrderCountAggregateOutputType | null
    _avg: RepairOrderAvgAggregateOutputType | null
    _sum: RepairOrderSumAggregateOutputType | null
    _min: RepairOrderMinAggregateOutputType | null
    _max: RepairOrderMaxAggregateOutputType | null
  }

  type GetRepairOrderGroupByPayload<T extends RepairOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepairOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepairOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepairOrderGroupByOutputType[P]>
            : GetScalarType<T[P], RepairOrderGroupByOutputType[P]>
        }
      >
    >


  export type RepairOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    userId?: boolean
    employeeId?: boolean
    status?: boolean
    materials?: boolean
    createdAt?: boolean
    createdBy?: boolean
    modifiedBy?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    employee?: boolean | UserDefaultArgs<ExtArgs>
    calendar?: boolean | RepairOrder$calendarArgs<ExtArgs>
    payments?: boolean | RepairOrder$paymentsArgs<ExtArgs>
    _count?: boolean | RepairOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repairOrder"]>



  export type RepairOrderSelectScalar = {
    id?: boolean
    carId?: boolean
    userId?: boolean
    employeeId?: boolean
    status?: boolean
    materials?: boolean
    createdAt?: boolean
    createdBy?: boolean
    modifiedBy?: boolean
  }

  export type RepairOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "carId" | "userId" | "employeeId" | "status" | "materials" | "createdAt" | "createdBy" | "modifiedBy", ExtArgs["result"]["repairOrder"]>
  export type RepairOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    employee?: boolean | UserDefaultArgs<ExtArgs>
    calendar?: boolean | RepairOrder$calendarArgs<ExtArgs>
    payments?: boolean | RepairOrder$paymentsArgs<ExtArgs>
    _count?: boolean | RepairOrderCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RepairOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RepairOrder"
    objects: {
      car: Prisma.$CarPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      employee: Prisma.$UserPayload<ExtArgs>
      calendar: Prisma.$ProductionCalendarPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      carId: number
      userId: number
      employeeId: number
      status: string
      materials: string
      createdAt: Date
      createdBy: number
      modifiedBy: number
    }, ExtArgs["result"]["repairOrder"]>
    composites: {}
  }

  type RepairOrderGetPayload<S extends boolean | null | undefined | RepairOrderDefaultArgs> = $Result.GetResult<Prisma.$RepairOrderPayload, S>

  type RepairOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RepairOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RepairOrderCountAggregateInputType | true
    }

  export interface RepairOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RepairOrder'], meta: { name: 'RepairOrder' } }
    /**
     * Find zero or one RepairOrder that matches the filter.
     * @param {RepairOrderFindUniqueArgs} args - Arguments to find a RepairOrder
     * @example
     * // Get one RepairOrder
     * const repairOrder = await prisma.repairOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepairOrderFindUniqueArgs>(args: SelectSubset<T, RepairOrderFindUniqueArgs<ExtArgs>>): Prisma__RepairOrderClient<$Result.GetResult<Prisma.$RepairOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RepairOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RepairOrderFindUniqueOrThrowArgs} args - Arguments to find a RepairOrder
     * @example
     * // Get one RepairOrder
     * const repairOrder = await prisma.repairOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepairOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, RepairOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepairOrderClient<$Result.GetResult<Prisma.$RepairOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RepairOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairOrderFindFirstArgs} args - Arguments to find a RepairOrder
     * @example
     * // Get one RepairOrder
     * const repairOrder = await prisma.repairOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepairOrderFindFirstArgs>(args?: SelectSubset<T, RepairOrderFindFirstArgs<ExtArgs>>): Prisma__RepairOrderClient<$Result.GetResult<Prisma.$RepairOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RepairOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairOrderFindFirstOrThrowArgs} args - Arguments to find a RepairOrder
     * @example
     * // Get one RepairOrder
     * const repairOrder = await prisma.repairOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepairOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, RepairOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepairOrderClient<$Result.GetResult<Prisma.$RepairOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RepairOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RepairOrders
     * const repairOrders = await prisma.repairOrder.findMany()
     * 
     * // Get first 10 RepairOrders
     * const repairOrders = await prisma.repairOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const repairOrderWithIdOnly = await prisma.repairOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RepairOrderFindManyArgs>(args?: SelectSubset<T, RepairOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RepairOrder.
     * @param {RepairOrderCreateArgs} args - Arguments to create a RepairOrder.
     * @example
     * // Create one RepairOrder
     * const RepairOrder = await prisma.repairOrder.create({
     *   data: {
     *     // ... data to create a RepairOrder
     *   }
     * })
     * 
     */
    create<T extends RepairOrderCreateArgs>(args: SelectSubset<T, RepairOrderCreateArgs<ExtArgs>>): Prisma__RepairOrderClient<$Result.GetResult<Prisma.$RepairOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RepairOrders.
     * @param {RepairOrderCreateManyArgs} args - Arguments to create many RepairOrders.
     * @example
     * // Create many RepairOrders
     * const repairOrder = await prisma.repairOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepairOrderCreateManyArgs>(args?: SelectSubset<T, RepairOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RepairOrder.
     * @param {RepairOrderDeleteArgs} args - Arguments to delete one RepairOrder.
     * @example
     * // Delete one RepairOrder
     * const RepairOrder = await prisma.repairOrder.delete({
     *   where: {
     *     // ... filter to delete one RepairOrder
     *   }
     * })
     * 
     */
    delete<T extends RepairOrderDeleteArgs>(args: SelectSubset<T, RepairOrderDeleteArgs<ExtArgs>>): Prisma__RepairOrderClient<$Result.GetResult<Prisma.$RepairOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RepairOrder.
     * @param {RepairOrderUpdateArgs} args - Arguments to update one RepairOrder.
     * @example
     * // Update one RepairOrder
     * const repairOrder = await prisma.repairOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepairOrderUpdateArgs>(args: SelectSubset<T, RepairOrderUpdateArgs<ExtArgs>>): Prisma__RepairOrderClient<$Result.GetResult<Prisma.$RepairOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RepairOrders.
     * @param {RepairOrderDeleteManyArgs} args - Arguments to filter RepairOrders to delete.
     * @example
     * // Delete a few RepairOrders
     * const { count } = await prisma.repairOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepairOrderDeleteManyArgs>(args?: SelectSubset<T, RepairOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RepairOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RepairOrders
     * const repairOrder = await prisma.repairOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepairOrderUpdateManyArgs>(args: SelectSubset<T, RepairOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RepairOrder.
     * @param {RepairOrderUpsertArgs} args - Arguments to update or create a RepairOrder.
     * @example
     * // Update or create a RepairOrder
     * const repairOrder = await prisma.repairOrder.upsert({
     *   create: {
     *     // ... data to create a RepairOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RepairOrder we want to update
     *   }
     * })
     */
    upsert<T extends RepairOrderUpsertArgs>(args: SelectSubset<T, RepairOrderUpsertArgs<ExtArgs>>): Prisma__RepairOrderClient<$Result.GetResult<Prisma.$RepairOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RepairOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairOrderCountArgs} args - Arguments to filter RepairOrders to count.
     * @example
     * // Count the number of RepairOrders
     * const count = await prisma.repairOrder.count({
     *   where: {
     *     // ... the filter for the RepairOrders we want to count
     *   }
     * })
    **/
    count<T extends RepairOrderCountArgs>(
      args?: Subset<T, RepairOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepairOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RepairOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RepairOrderAggregateArgs>(args: Subset<T, RepairOrderAggregateArgs>): Prisma.PrismaPromise<GetRepairOrderAggregateType<T>>

    /**
     * Group by RepairOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairOrderGroupByArgs} args - Group by arguments.
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
      T extends RepairOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepairOrderGroupByArgs['orderBy'] }
        : { orderBy?: RepairOrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RepairOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepairOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RepairOrder model
   */
  readonly fields: RepairOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RepairOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepairOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends CarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarDefaultArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employee<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    calendar<T extends RepairOrder$calendarArgs<ExtArgs> = {}>(args?: Subset<T, RepairOrder$calendarArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionCalendarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends RepairOrder$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, RepairOrder$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the RepairOrder model
   */
  interface RepairOrderFieldRefs {
    readonly id: FieldRef<"RepairOrder", 'Int'>
    readonly carId: FieldRef<"RepairOrder", 'Int'>
    readonly userId: FieldRef<"RepairOrder", 'Int'>
    readonly employeeId: FieldRef<"RepairOrder", 'Int'>
    readonly status: FieldRef<"RepairOrder", 'String'>
    readonly materials: FieldRef<"RepairOrder", 'String'>
    readonly createdAt: FieldRef<"RepairOrder", 'DateTime'>
    readonly createdBy: FieldRef<"RepairOrder", 'Int'>
    readonly modifiedBy: FieldRef<"RepairOrder", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RepairOrder findUnique
   */
  export type RepairOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairOrder
     */
    select?: RepairOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairOrder
     */
    omit?: RepairOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairOrderInclude<ExtArgs> | null
    /**
     * Filter, which RepairOrder to fetch.
     */
    where: RepairOrderWhereUniqueInput
  }

  /**
   * RepairOrder findUniqueOrThrow
   */
  export type RepairOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairOrder
     */
    select?: RepairOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairOrder
     */
    omit?: RepairOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairOrderInclude<ExtArgs> | null
    /**
     * Filter, which RepairOrder to fetch.
     */
    where: RepairOrderWhereUniqueInput
  }

  /**
   * RepairOrder findFirst
   */
  export type RepairOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairOrder
     */
    select?: RepairOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairOrder
     */
    omit?: RepairOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairOrderInclude<ExtArgs> | null
    /**
     * Filter, which RepairOrder to fetch.
     */
    where?: RepairOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairOrders to fetch.
     */
    orderBy?: RepairOrderOrderByWithRelationInput | RepairOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RepairOrders.
     */
    cursor?: RepairOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RepairOrders.
     */
    distinct?: RepairOrderScalarFieldEnum | RepairOrderScalarFieldEnum[]
  }

  /**
   * RepairOrder findFirstOrThrow
   */
  export type RepairOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairOrder
     */
    select?: RepairOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairOrder
     */
    omit?: RepairOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairOrderInclude<ExtArgs> | null
    /**
     * Filter, which RepairOrder to fetch.
     */
    where?: RepairOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairOrders to fetch.
     */
    orderBy?: RepairOrderOrderByWithRelationInput | RepairOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RepairOrders.
     */
    cursor?: RepairOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RepairOrders.
     */
    distinct?: RepairOrderScalarFieldEnum | RepairOrderScalarFieldEnum[]
  }

  /**
   * RepairOrder findMany
   */
  export type RepairOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairOrder
     */
    select?: RepairOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairOrder
     */
    omit?: RepairOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairOrderInclude<ExtArgs> | null
    /**
     * Filter, which RepairOrders to fetch.
     */
    where?: RepairOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairOrders to fetch.
     */
    orderBy?: RepairOrderOrderByWithRelationInput | RepairOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RepairOrders.
     */
    cursor?: RepairOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairOrders.
     */
    skip?: number
    distinct?: RepairOrderScalarFieldEnum | RepairOrderScalarFieldEnum[]
  }

  /**
   * RepairOrder create
   */
  export type RepairOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairOrder
     */
    select?: RepairOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairOrder
     */
    omit?: RepairOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a RepairOrder.
     */
    data: XOR<RepairOrderCreateInput, RepairOrderUncheckedCreateInput>
  }

  /**
   * RepairOrder createMany
   */
  export type RepairOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RepairOrders.
     */
    data: RepairOrderCreateManyInput | RepairOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RepairOrder update
   */
  export type RepairOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairOrder
     */
    select?: RepairOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairOrder
     */
    omit?: RepairOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a RepairOrder.
     */
    data: XOR<RepairOrderUpdateInput, RepairOrderUncheckedUpdateInput>
    /**
     * Choose, which RepairOrder to update.
     */
    where: RepairOrderWhereUniqueInput
  }

  /**
   * RepairOrder updateMany
   */
  export type RepairOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RepairOrders.
     */
    data: XOR<RepairOrderUpdateManyMutationInput, RepairOrderUncheckedUpdateManyInput>
    /**
     * Filter which RepairOrders to update
     */
    where?: RepairOrderWhereInput
    /**
     * Limit how many RepairOrders to update.
     */
    limit?: number
  }

  /**
   * RepairOrder upsert
   */
  export type RepairOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairOrder
     */
    select?: RepairOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairOrder
     */
    omit?: RepairOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the RepairOrder to update in case it exists.
     */
    where: RepairOrderWhereUniqueInput
    /**
     * In case the RepairOrder found by the `where` argument doesn't exist, create a new RepairOrder with this data.
     */
    create: XOR<RepairOrderCreateInput, RepairOrderUncheckedCreateInput>
    /**
     * In case the RepairOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepairOrderUpdateInput, RepairOrderUncheckedUpdateInput>
  }

  /**
   * RepairOrder delete
   */
  export type RepairOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairOrder
     */
    select?: RepairOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairOrder
     */
    omit?: RepairOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairOrderInclude<ExtArgs> | null
    /**
     * Filter which RepairOrder to delete.
     */
    where: RepairOrderWhereUniqueInput
  }

  /**
   * RepairOrder deleteMany
   */
  export type RepairOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RepairOrders to delete
     */
    where?: RepairOrderWhereInput
    /**
     * Limit how many RepairOrders to delete.
     */
    limit?: number
  }

  /**
   * RepairOrder.calendar
   */
  export type RepairOrder$calendarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionCalendar
     */
    select?: ProductionCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionCalendar
     */
    omit?: ProductionCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionCalendarInclude<ExtArgs> | null
    where?: ProductionCalendarWhereInput
    orderBy?: ProductionCalendarOrderByWithRelationInput | ProductionCalendarOrderByWithRelationInput[]
    cursor?: ProductionCalendarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductionCalendarScalarFieldEnum | ProductionCalendarScalarFieldEnum[]
  }

  /**
   * RepairOrder.payments
   */
  export type RepairOrder$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * RepairOrder without action
   */
  export type RepairOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairOrder
     */
    select?: RepairOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairOrder
     */
    omit?: RepairOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairOrderInclude<ExtArgs> | null
  }


  /**
   * Model Part
   */

  export type AggregatePart = {
    _count: PartCountAggregateOutputType | null
    _avg: PartAvgAggregateOutputType | null
    _sum: PartSumAggregateOutputType | null
    _min: PartMinAggregateOutputType | null
    _max: PartMaxAggregateOutputType | null
  }

  export type PartAvgAggregateOutputType = {
    id: number | null
    supplierId: number | null
    price: Decimal | null
  }

  export type PartSumAggregateOutputType = {
    id: number | null
    supplierId: number | null
    price: Decimal | null
  }

  export type PartMinAggregateOutputType = {
    id: number | null
    name: string | null
    supplierId: number | null
    price: Decimal | null
    lastUpdated: Date | null
  }

  export type PartMaxAggregateOutputType = {
    id: number | null
    name: string | null
    supplierId: number | null
    price: Decimal | null
    lastUpdated: Date | null
  }

  export type PartCountAggregateOutputType = {
    id: number
    name: number
    supplierId: number
    price: number
    lastUpdated: number
    _all: number
  }


  export type PartAvgAggregateInputType = {
    id?: true
    supplierId?: true
    price?: true
  }

  export type PartSumAggregateInputType = {
    id?: true
    supplierId?: true
    price?: true
  }

  export type PartMinAggregateInputType = {
    id?: true
    name?: true
    supplierId?: true
    price?: true
    lastUpdated?: true
  }

  export type PartMaxAggregateInputType = {
    id?: true
    name?: true
    supplierId?: true
    price?: true
    lastUpdated?: true
  }

  export type PartCountAggregateInputType = {
    id?: true
    name?: true
    supplierId?: true
    price?: true
    lastUpdated?: true
    _all?: true
  }

  export type PartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Part to aggregate.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parts
    **/
    _count?: true | PartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartMaxAggregateInputType
  }

  export type GetPartAggregateType<T extends PartAggregateArgs> = {
        [P in keyof T & keyof AggregatePart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePart[P]>
      : GetScalarType<T[P], AggregatePart[P]>
  }




  export type PartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartWhereInput
    orderBy?: PartOrderByWithAggregationInput | PartOrderByWithAggregationInput[]
    by: PartScalarFieldEnum[] | PartScalarFieldEnum
    having?: PartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartCountAggregateInputType | true
    _avg?: PartAvgAggregateInputType
    _sum?: PartSumAggregateInputType
    _min?: PartMinAggregateInputType
    _max?: PartMaxAggregateInputType
  }

  export type PartGroupByOutputType = {
    id: number
    name: string
    supplierId: number
    price: Decimal
    lastUpdated: Date
    _count: PartCountAggregateOutputType | null
    _avg: PartAvgAggregateOutputType | null
    _sum: PartSumAggregateOutputType | null
    _min: PartMinAggregateOutputType | null
    _max: PartMaxAggregateOutputType | null
  }

  type GetPartGroupByPayload<T extends PartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartGroupByOutputType[P]>
            : GetScalarType<T[P], PartGroupByOutputType[P]>
        }
      >
    >


  export type PartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    supplierId?: boolean
    price?: boolean
    lastUpdated?: boolean
  }, ExtArgs["result"]["part"]>



  export type PartSelectScalar = {
    id?: boolean
    name?: boolean
    supplierId?: boolean
    price?: boolean
    lastUpdated?: boolean
  }

  export type PartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "supplierId" | "price" | "lastUpdated", ExtArgs["result"]["part"]>

  export type $PartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Part"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      supplierId: number
      price: Prisma.Decimal
      lastUpdated: Date
    }, ExtArgs["result"]["part"]>
    composites: {}
  }

  type PartGetPayload<S extends boolean | null | undefined | PartDefaultArgs> = $Result.GetResult<Prisma.$PartPayload, S>

  type PartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartCountAggregateInputType | true
    }

  export interface PartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Part'], meta: { name: 'Part' } }
    /**
     * Find zero or one Part that matches the filter.
     * @param {PartFindUniqueArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartFindUniqueArgs>(args: SelectSubset<T, PartFindUniqueArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Part that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartFindUniqueOrThrowArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartFindUniqueOrThrowArgs>(args: SelectSubset<T, PartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Part that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartFindFirstArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartFindFirstArgs>(args?: SelectSubset<T, PartFindFirstArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Part that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartFindFirstOrThrowArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartFindFirstOrThrowArgs>(args?: SelectSubset<T, PartFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parts
     * const parts = await prisma.part.findMany()
     * 
     * // Get first 10 Parts
     * const parts = await prisma.part.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partWithIdOnly = await prisma.part.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartFindManyArgs>(args?: SelectSubset<T, PartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Part.
     * @param {PartCreateArgs} args - Arguments to create a Part.
     * @example
     * // Create one Part
     * const Part = await prisma.part.create({
     *   data: {
     *     // ... data to create a Part
     *   }
     * })
     * 
     */
    create<T extends PartCreateArgs>(args: SelectSubset<T, PartCreateArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parts.
     * @param {PartCreateManyArgs} args - Arguments to create many Parts.
     * @example
     * // Create many Parts
     * const part = await prisma.part.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartCreateManyArgs>(args?: SelectSubset<T, PartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Part.
     * @param {PartDeleteArgs} args - Arguments to delete one Part.
     * @example
     * // Delete one Part
     * const Part = await prisma.part.delete({
     *   where: {
     *     // ... filter to delete one Part
     *   }
     * })
     * 
     */
    delete<T extends PartDeleteArgs>(args: SelectSubset<T, PartDeleteArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Part.
     * @param {PartUpdateArgs} args - Arguments to update one Part.
     * @example
     * // Update one Part
     * const part = await prisma.part.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartUpdateArgs>(args: SelectSubset<T, PartUpdateArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parts.
     * @param {PartDeleteManyArgs} args - Arguments to filter Parts to delete.
     * @example
     * // Delete a few Parts
     * const { count } = await prisma.part.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartDeleteManyArgs>(args?: SelectSubset<T, PartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parts
     * const part = await prisma.part.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartUpdateManyArgs>(args: SelectSubset<T, PartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Part.
     * @param {PartUpsertArgs} args - Arguments to update or create a Part.
     * @example
     * // Update or create a Part
     * const part = await prisma.part.upsert({
     *   create: {
     *     // ... data to create a Part
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Part we want to update
     *   }
     * })
     */
    upsert<T extends PartUpsertArgs>(args: SelectSubset<T, PartUpsertArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartCountArgs} args - Arguments to filter Parts to count.
     * @example
     * // Count the number of Parts
     * const count = await prisma.part.count({
     *   where: {
     *     // ... the filter for the Parts we want to count
     *   }
     * })
    **/
    count<T extends PartCountArgs>(
      args?: Subset<T, PartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Part.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PartAggregateArgs>(args: Subset<T, PartAggregateArgs>): Prisma.PrismaPromise<GetPartAggregateType<T>>

    /**
     * Group by Part.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartGroupByArgs} args - Group by arguments.
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
      T extends PartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartGroupByArgs['orderBy'] }
        : { orderBy?: PartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Part model
   */
  readonly fields: PartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Part.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Part model
   */
  interface PartFieldRefs {
    readonly id: FieldRef<"Part", 'Int'>
    readonly name: FieldRef<"Part", 'String'>
    readonly supplierId: FieldRef<"Part", 'Int'>
    readonly price: FieldRef<"Part", 'Decimal'>
    readonly lastUpdated: FieldRef<"Part", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Part findUnique
   */
  export type PartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part findUniqueOrThrow
   */
  export type PartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part findFirst
   */
  export type PartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parts.
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parts.
     */
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * Part findFirstOrThrow
   */
  export type PartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parts.
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parts.
     */
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * Part findMany
   */
  export type PartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Filter, which Parts to fetch.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parts.
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * Part create
   */
  export type PartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * The data needed to create a Part.
     */
    data: XOR<PartCreateInput, PartUncheckedCreateInput>
  }

  /**
   * Part createMany
   */
  export type PartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parts.
     */
    data: PartCreateManyInput | PartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Part update
   */
  export type PartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * The data needed to update a Part.
     */
    data: XOR<PartUpdateInput, PartUncheckedUpdateInput>
    /**
     * Choose, which Part to update.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part updateMany
   */
  export type PartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parts.
     */
    data: XOR<PartUpdateManyMutationInput, PartUncheckedUpdateManyInput>
    /**
     * Filter which Parts to update
     */
    where?: PartWhereInput
    /**
     * Limit how many Parts to update.
     */
    limit?: number
  }

  /**
   * Part upsert
   */
  export type PartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * The filter to search for the Part to update in case it exists.
     */
    where: PartWhereUniqueInput
    /**
     * In case the Part found by the `where` argument doesn't exist, create a new Part with this data.
     */
    create: XOR<PartCreateInput, PartUncheckedCreateInput>
    /**
     * In case the Part was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartUpdateInput, PartUncheckedUpdateInput>
  }

  /**
   * Part delete
   */
  export type PartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Filter which Part to delete.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part deleteMany
   */
  export type PartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parts to delete
     */
    where?: PartWhereInput
    /**
     * Limit how many Parts to delete.
     */
    limit?: number
  }

  /**
   * Part without action
   */
  export type PartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    repairOrderId: number | null
    userId: number | null
    amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    repairOrderId: number | null
    userId: number | null
    amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    repairOrderId: number | null
    userId: number | null
    amount: Decimal | null
    paymentDate: Date | null
    paymentMethod: string | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    repairOrderId: number | null
    userId: number | null
    amount: Decimal | null
    paymentDate: Date | null
    paymentMethod: string | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    repairOrderId: number
    userId: number
    amount: number
    paymentDate: number
    paymentMethod: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    repairOrderId?: true
    userId?: true
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    repairOrderId?: true
    userId?: true
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    repairOrderId?: true
    userId?: true
    amount?: true
    paymentDate?: true
    paymentMethod?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    repairOrderId?: true
    userId?: true
    amount?: true
    paymentDate?: true
    paymentMethod?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    repairOrderId?: true
    userId?: true
    amount?: true
    paymentDate?: true
    paymentMethod?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    repairOrderId: number
    userId: number
    amount: Decimal
    paymentDate: Date
    paymentMethod: string
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repairOrderId?: boolean
    userId?: boolean
    amount?: boolean
    paymentDate?: boolean
    paymentMethod?: boolean
    repairOrder?: boolean | RepairOrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>



  export type PaymentSelectScalar = {
    id?: boolean
    repairOrderId?: boolean
    userId?: boolean
    amount?: boolean
    paymentDate?: boolean
    paymentMethod?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "repairOrderId" | "userId" | "amount" | "paymentDate" | "paymentMethod", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repairOrder?: boolean | RepairOrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      repairOrder: Prisma.$RepairOrderPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      repairOrderId: number
      userId: number
      amount: Prisma.Decimal
      paymentDate: Date
      paymentMethod: string
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    repairOrder<T extends RepairOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RepairOrderDefaultArgs<ExtArgs>>): Prisma__RepairOrderClient<$Result.GetResult<Prisma.$RepairOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly repairOrderId: FieldRef<"Payment", 'Int'>
    readonly userId: FieldRef<"Payment", 'Int'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly paymentDate: FieldRef<"Payment", 'DateTime'>
    readonly paymentMethod: FieldRef<"Payment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type ServiceSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    price: number | null
    image: string | null
    category: string | null
    format: string | null
    brands: string | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    price: number | null
    image: string | null
    category: string | null
    format: string | null
    brands: string | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    title: number
    description: number
    price: number
    image: number
    category: number
    format: number
    brands: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type ServiceSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    image?: true
    category?: true
    format?: true
    brands?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    image?: true
    category?: true
    format?: true
    brands?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    image?: true
    category?: true
    format?: true
    brands?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: number
    title: string
    description: string
    price: number
    image: string
    category: string
    format: string
    brands: string
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    image?: boolean
    category?: boolean
    format?: boolean
    brands?: boolean
  }, ExtArgs["result"]["service"]>



  export type ServiceSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    image?: boolean
    category?: boolean
    format?: boolean
    brands?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "price" | "image" | "category" | "format" | "brands", ExtArgs["result"]["service"]>

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      price: number
      image: string
      category: string
      format: string
      brands: string
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
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
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'Int'>
    readonly title: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly price: FieldRef<"Service", 'Int'>
    readonly image: FieldRef<"Service", 'String'>
    readonly category: FieldRef<"Service", 'String'>
    readonly format: FieldRef<"Service", 'String'>
    readonly brands: FieldRef<"Service", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    avatar: 'avatar',
    regionId: 'regionId',
    created: 'created',
    createdBy: 'createdBy',
    modified: 'modified',
    modifiedBy: 'modifiedBy'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserRoleScalarFieldEnum: {
    userId: 'userId',
    roleId: 'roleId'
  };

  export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]


  export const RegionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    region: 'region',
    district: 'district'
  };

  export type RegionScalarFieldEnum = (typeof RegionScalarFieldEnum)[keyof typeof RegionScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    position: 'position',
    salary: 'salary',
    hiredDate: 'hiredDate',
    created: 'created',
    createdBy: 'createdBy',
    modified: 'modified',
    modifiedBy: 'modifiedBy'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const WorkScheduleScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    workDate: 'workDate',
    startTime: 'startTime',
    endTime: 'endTime',
    status: 'status'
  };

  export type WorkScheduleScalarFieldEnum = (typeof WorkScheduleScalarFieldEnum)[keyof typeof WorkScheduleScalarFieldEnum]


  export const ProductionCalendarScalarFieldEnum: {
    id: 'id',
    workScheduleId: 'workScheduleId',
    ordersId: 'ordersId',
    workDate: 'workDate',
    isHoliday: 'isHoliday'
  };

  export type ProductionCalendarScalarFieldEnum = (typeof ProductionCalendarScalarFieldEnum)[keyof typeof ProductionCalendarScalarFieldEnum]


  export const CarScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    brandId: 'brandId',
    model: 'model',
    year: 'year',
    vin: 'vin',
    engineType: 'engineType',
    registrationNumber: 'registrationNumber',
    pts: 'pts',
    sts: 'sts',
    status: 'status'
  };

  export type CarScalarFieldEnum = (typeof CarScalarFieldEnum)[keyof typeof CarScalarFieldEnum]


  export const RepairOrderScalarFieldEnum: {
    id: 'id',
    carId: 'carId',
    userId: 'userId',
    employeeId: 'employeeId',
    status: 'status',
    materials: 'materials',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    modifiedBy: 'modifiedBy'
  };

  export type RepairOrderScalarFieldEnum = (typeof RepairOrderScalarFieldEnum)[keyof typeof RepairOrderScalarFieldEnum]


  export const PartScalarFieldEnum: {
    id: 'id',
    name: 'name',
    supplierId: 'supplierId',
    price: 'price',
    lastUpdated: 'lastUpdated'
  };

  export type PartScalarFieldEnum = (typeof PartScalarFieldEnum)[keyof typeof PartScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    repairOrderId: 'repairOrderId',
    userId: 'userId',
    amount: 'amount',
    paymentDate: 'paymentDate',
    paymentMethod: 'paymentMethod'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    price: 'price',
    image: 'image',
    category: 'category',
    format: 'format',
    brands: 'brands'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    phone: 'phone',
    avatar: 'avatar'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const RoleOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type RoleOrderByRelevanceFieldEnum = (typeof RoleOrderByRelevanceFieldEnum)[keyof typeof RoleOrderByRelevanceFieldEnum]


  export const RegionOrderByRelevanceFieldEnum: {
    name: 'name',
    region: 'region',
    district: 'district'
  };

  export type RegionOrderByRelevanceFieldEnum = (typeof RegionOrderByRelevanceFieldEnum)[keyof typeof RegionOrderByRelevanceFieldEnum]


  export const EmployeeOrderByRelevanceFieldEnum: {
    position: 'position'
  };

  export type EmployeeOrderByRelevanceFieldEnum = (typeof EmployeeOrderByRelevanceFieldEnum)[keyof typeof EmployeeOrderByRelevanceFieldEnum]


  export const WorkScheduleOrderByRelevanceFieldEnum: {
    status: 'status'
  };

  export type WorkScheduleOrderByRelevanceFieldEnum = (typeof WorkScheduleOrderByRelevanceFieldEnum)[keyof typeof WorkScheduleOrderByRelevanceFieldEnum]


  export const CarOrderByRelevanceFieldEnum: {
    model: 'model',
    vin: 'vin',
    engineType: 'engineType',
    registrationNumber: 'registrationNumber',
    pts: 'pts',
    sts: 'sts',
    status: 'status'
  };

  export type CarOrderByRelevanceFieldEnum = (typeof CarOrderByRelevanceFieldEnum)[keyof typeof CarOrderByRelevanceFieldEnum]


  export const RepairOrderOrderByRelevanceFieldEnum: {
    status: 'status',
    materials: 'materials'
  };

  export type RepairOrderOrderByRelevanceFieldEnum = (typeof RepairOrderOrderByRelevanceFieldEnum)[keyof typeof RepairOrderOrderByRelevanceFieldEnum]


  export const PartOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type PartOrderByRelevanceFieldEnum = (typeof PartOrderByRelevanceFieldEnum)[keyof typeof PartOrderByRelevanceFieldEnum]


  export const PaymentOrderByRelevanceFieldEnum: {
    paymentMethod: 'paymentMethod'
  };

  export type PaymentOrderByRelevanceFieldEnum = (typeof PaymentOrderByRelevanceFieldEnum)[keyof typeof PaymentOrderByRelevanceFieldEnum]


  export const ServiceOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    image: 'image',
    category: 'category',
    format: 'format',
    brands: 'brands'
  };

  export type ServiceOrderByRelevanceFieldEnum = (typeof ServiceOrderByRelevanceFieldEnum)[keyof typeof ServiceOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    regionId?: IntFilter<"User"> | number
    created?: DateTimeFilter<"User"> | Date | string
    createdBy?: IntFilter<"User"> | number
    modified?: DateTimeNullableFilter<"User"> | Date | string | null
    modifiedBy?: IntNullableFilter<"User"> | number | null
    region?: XOR<RegionScalarRelationFilter, RegionWhereInput>
    cars?: CarListRelationFilter
    ordersUser?: RepairOrderListRelationFilter
    ordersEmployee?: RepairOrderListRelationFilter
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    userRoles?: UserRoleListRelationFilter
    payments?: PaymentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    avatar?: SortOrderInput | SortOrder
    regionId?: SortOrder
    created?: SortOrder
    createdBy?: SortOrder
    modified?: SortOrderInput | SortOrder
    modifiedBy?: SortOrderInput | SortOrder
    region?: RegionOrderByWithRelationInput
    cars?: CarOrderByRelationAggregateInput
    ordersUser?: RepairOrderOrderByRelationAggregateInput
    ordersEmployee?: RepairOrderOrderByRelationAggregateInput
    employee?: EmployeeOrderByWithRelationInput
    userRoles?: UserRoleOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    regionId?: IntFilter<"User"> | number
    created?: DateTimeFilter<"User"> | Date | string
    createdBy?: IntFilter<"User"> | number
    modified?: DateTimeNullableFilter<"User"> | Date | string | null
    modifiedBy?: IntNullableFilter<"User"> | number | null
    region?: XOR<RegionScalarRelationFilter, RegionWhereInput>
    cars?: CarListRelationFilter
    ordersUser?: RepairOrderListRelationFilter
    ordersEmployee?: RepairOrderListRelationFilter
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    userRoles?: UserRoleListRelationFilter
    payments?: PaymentListRelationFilter
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    avatar?: SortOrderInput | SortOrder
    regionId?: SortOrder
    created?: SortOrder
    createdBy?: SortOrder
    modified?: SortOrderInput | SortOrder
    modifiedBy?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    regionId?: IntWithAggregatesFilter<"User"> | number
    created?: DateTimeWithAggregatesFilter<"User"> | Date | string
    createdBy?: IntWithAggregatesFilter<"User"> | number
    modified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    modifiedBy?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    userRoles?: UserRoleListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userRoles?: UserRoleOrderByRelationAggregateInput
    _relevance?: RoleOrderByRelevanceInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    userRoles?: UserRoleListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    name?: StringWithAggregatesFilter<"Role"> | string
  }

  export type UserRoleWhereInput = {
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    userId?: IntFilter<"UserRole"> | number
    roleId?: IntFilter<"UserRole"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type UserRoleOrderByWithRelationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    user?: UserOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
  }

  export type UserRoleWhereUniqueInput = Prisma.AtLeast<{
    userId_roleId?: UserRoleUserIdRoleIdCompoundUniqueInput
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    userId?: IntFilter<"UserRole"> | number
    roleId?: IntFilter<"UserRole"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "userId_roleId">

  export type UserRoleOrderByWithAggregationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    _count?: UserRoleCountOrderByAggregateInput
    _avg?: UserRoleAvgOrderByAggregateInput
    _max?: UserRoleMaxOrderByAggregateInput
    _min?: UserRoleMinOrderByAggregateInput
    _sum?: UserRoleSumOrderByAggregateInput
  }

  export type UserRoleScalarWhereWithAggregatesInput = {
    AND?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    OR?: UserRoleScalarWhereWithAggregatesInput[]
    NOT?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"UserRole"> | number
    roleId?: IntWithAggregatesFilter<"UserRole"> | number
  }

  export type RegionWhereInput = {
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    id?: IntFilter<"Region"> | number
    name?: StringFilter<"Region"> | string
    region?: StringFilter<"Region"> | string
    district?: StringFilter<"Region"> | string
    users?: UserListRelationFilter
  }

  export type RegionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    district?: SortOrder
    users?: UserOrderByRelationAggregateInput
    _relevance?: RegionOrderByRelevanceInput
  }

  export type RegionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    name?: StringFilter<"Region"> | string
    region?: StringFilter<"Region"> | string
    district?: StringFilter<"Region"> | string
    users?: UserListRelationFilter
  }, "id">

  export type RegionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    district?: SortOrder
    _count?: RegionCountOrderByAggregateInput
    _avg?: RegionAvgOrderByAggregateInput
    _max?: RegionMaxOrderByAggregateInput
    _min?: RegionMinOrderByAggregateInput
    _sum?: RegionSumOrderByAggregateInput
  }

  export type RegionScalarWhereWithAggregatesInput = {
    AND?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    OR?: RegionScalarWhereWithAggregatesInput[]
    NOT?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Region"> | number
    name?: StringWithAggregatesFilter<"Region"> | string
    region?: StringWithAggregatesFilter<"Region"> | string
    district?: StringWithAggregatesFilter<"Region"> | string
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: IntFilter<"Employee"> | number
    userId?: IntFilter<"Employee"> | number
    position?: StringFilter<"Employee"> | string
    salary?: DecimalNullableFilter<"Employee"> | Decimal | DecimalJsLike | number | string | null
    hiredDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    created?: DateTimeFilter<"Employee"> | Date | string
    createdBy?: IntFilter<"Employee"> | number
    modified?: DateTimeNullableFilter<"Employee"> | Date | string | null
    modifiedBy?: IntNullableFilter<"Employee"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workSchedules?: WorkScheduleListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    position?: SortOrder
    salary?: SortOrderInput | SortOrder
    hiredDate?: SortOrderInput | SortOrder
    created?: SortOrder
    createdBy?: SortOrder
    modified?: SortOrderInput | SortOrder
    modifiedBy?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    workSchedules?: WorkScheduleOrderByRelationAggregateInput
    _relevance?: EmployeeOrderByRelevanceInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    position?: StringFilter<"Employee"> | string
    salary?: DecimalNullableFilter<"Employee"> | Decimal | DecimalJsLike | number | string | null
    hiredDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    created?: DateTimeFilter<"Employee"> | Date | string
    createdBy?: IntFilter<"Employee"> | number
    modified?: DateTimeNullableFilter<"Employee"> | Date | string | null
    modifiedBy?: IntNullableFilter<"Employee"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workSchedules?: WorkScheduleListRelationFilter
  }, "id" | "userId">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    position?: SortOrder
    salary?: SortOrderInput | SortOrder
    hiredDate?: SortOrderInput | SortOrder
    created?: SortOrder
    createdBy?: SortOrder
    modified?: SortOrderInput | SortOrder
    modifiedBy?: SortOrderInput | SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Employee"> | number
    userId?: IntWithAggregatesFilter<"Employee"> | number
    position?: StringWithAggregatesFilter<"Employee"> | string
    salary?: DecimalNullableWithAggregatesFilter<"Employee"> | Decimal | DecimalJsLike | number | string | null
    hiredDate?: DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null
    created?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    createdBy?: IntWithAggregatesFilter<"Employee"> | number
    modified?: DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null
    modifiedBy?: IntNullableWithAggregatesFilter<"Employee"> | number | null
  }

  export type WorkScheduleWhereInput = {
    AND?: WorkScheduleWhereInput | WorkScheduleWhereInput[]
    OR?: WorkScheduleWhereInput[]
    NOT?: WorkScheduleWhereInput | WorkScheduleWhereInput[]
    id?: IntFilter<"WorkSchedule"> | number
    employeeId?: IntFilter<"WorkSchedule"> | number
    workDate?: DateTimeFilter<"WorkSchedule"> | Date | string
    startTime?: DateTimeFilter<"WorkSchedule"> | Date | string
    endTime?: DateTimeFilter<"WorkSchedule"> | Date | string
    status?: StringFilter<"WorkSchedule"> | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    calendar?: ProductionCalendarListRelationFilter
  }

  export type WorkScheduleOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    workDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
    calendar?: ProductionCalendarOrderByRelationAggregateInput
    _relevance?: WorkScheduleOrderByRelevanceInput
  }

  export type WorkScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WorkScheduleWhereInput | WorkScheduleWhereInput[]
    OR?: WorkScheduleWhereInput[]
    NOT?: WorkScheduleWhereInput | WorkScheduleWhereInput[]
    employeeId?: IntFilter<"WorkSchedule"> | number
    workDate?: DateTimeFilter<"WorkSchedule"> | Date | string
    startTime?: DateTimeFilter<"WorkSchedule"> | Date | string
    endTime?: DateTimeFilter<"WorkSchedule"> | Date | string
    status?: StringFilter<"WorkSchedule"> | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    calendar?: ProductionCalendarListRelationFilter
  }, "id">

  export type WorkScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    workDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    _count?: WorkScheduleCountOrderByAggregateInput
    _avg?: WorkScheduleAvgOrderByAggregateInput
    _max?: WorkScheduleMaxOrderByAggregateInput
    _min?: WorkScheduleMinOrderByAggregateInput
    _sum?: WorkScheduleSumOrderByAggregateInput
  }

  export type WorkScheduleScalarWhereWithAggregatesInput = {
    AND?: WorkScheduleScalarWhereWithAggregatesInput | WorkScheduleScalarWhereWithAggregatesInput[]
    OR?: WorkScheduleScalarWhereWithAggregatesInput[]
    NOT?: WorkScheduleScalarWhereWithAggregatesInput | WorkScheduleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WorkSchedule"> | number
    employeeId?: IntWithAggregatesFilter<"WorkSchedule"> | number
    workDate?: DateTimeWithAggregatesFilter<"WorkSchedule"> | Date | string
    startTime?: DateTimeWithAggregatesFilter<"WorkSchedule"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"WorkSchedule"> | Date | string
    status?: StringWithAggregatesFilter<"WorkSchedule"> | string
  }

  export type ProductionCalendarWhereInput = {
    AND?: ProductionCalendarWhereInput | ProductionCalendarWhereInput[]
    OR?: ProductionCalendarWhereInput[]
    NOT?: ProductionCalendarWhereInput | ProductionCalendarWhereInput[]
    id?: IntFilter<"ProductionCalendar"> | number
    workScheduleId?: IntFilter<"ProductionCalendar"> | number
    ordersId?: IntNullableFilter<"ProductionCalendar"> | number | null
    workDate?: DateTimeFilter<"ProductionCalendar"> | Date | string
    isHoliday?: BoolFilter<"ProductionCalendar"> | boolean
    workSchedule?: XOR<WorkScheduleScalarRelationFilter, WorkScheduleWhereInput>
    orders?: XOR<RepairOrderNullableScalarRelationFilter, RepairOrderWhereInput> | null
  }

  export type ProductionCalendarOrderByWithRelationInput = {
    id?: SortOrder
    workScheduleId?: SortOrder
    ordersId?: SortOrderInput | SortOrder
    workDate?: SortOrder
    isHoliday?: SortOrder
    workSchedule?: WorkScheduleOrderByWithRelationInput
    orders?: RepairOrderOrderByWithRelationInput
  }

  export type ProductionCalendarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductionCalendarWhereInput | ProductionCalendarWhereInput[]
    OR?: ProductionCalendarWhereInput[]
    NOT?: ProductionCalendarWhereInput | ProductionCalendarWhereInput[]
    workScheduleId?: IntFilter<"ProductionCalendar"> | number
    ordersId?: IntNullableFilter<"ProductionCalendar"> | number | null
    workDate?: DateTimeFilter<"ProductionCalendar"> | Date | string
    isHoliday?: BoolFilter<"ProductionCalendar"> | boolean
    workSchedule?: XOR<WorkScheduleScalarRelationFilter, WorkScheduleWhereInput>
    orders?: XOR<RepairOrderNullableScalarRelationFilter, RepairOrderWhereInput> | null
  }, "id">

  export type ProductionCalendarOrderByWithAggregationInput = {
    id?: SortOrder
    workScheduleId?: SortOrder
    ordersId?: SortOrderInput | SortOrder
    workDate?: SortOrder
    isHoliday?: SortOrder
    _count?: ProductionCalendarCountOrderByAggregateInput
    _avg?: ProductionCalendarAvgOrderByAggregateInput
    _max?: ProductionCalendarMaxOrderByAggregateInput
    _min?: ProductionCalendarMinOrderByAggregateInput
    _sum?: ProductionCalendarSumOrderByAggregateInput
  }

  export type ProductionCalendarScalarWhereWithAggregatesInput = {
    AND?: ProductionCalendarScalarWhereWithAggregatesInput | ProductionCalendarScalarWhereWithAggregatesInput[]
    OR?: ProductionCalendarScalarWhereWithAggregatesInput[]
    NOT?: ProductionCalendarScalarWhereWithAggregatesInput | ProductionCalendarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductionCalendar"> | number
    workScheduleId?: IntWithAggregatesFilter<"ProductionCalendar"> | number
    ordersId?: IntNullableWithAggregatesFilter<"ProductionCalendar"> | number | null
    workDate?: DateTimeWithAggregatesFilter<"ProductionCalendar"> | Date | string
    isHoliday?: BoolWithAggregatesFilter<"ProductionCalendar"> | boolean
  }

  export type CarWhereInput = {
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    id?: IntFilter<"Car"> | number
    userId?: IntFilter<"Car"> | number
    brandId?: IntFilter<"Car"> | number
    model?: StringFilter<"Car"> | string
    year?: IntFilter<"Car"> | number
    vin?: StringFilter<"Car"> | string
    engineType?: StringFilter<"Car"> | string
    registrationNumber?: StringFilter<"Car"> | string
    pts?: StringFilter<"Car"> | string
    sts?: StringFilter<"Car"> | string
    status?: StringFilter<"Car"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    repairOrders?: RepairOrderListRelationFilter
  }

  export type CarOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    brandId?: SortOrder
    model?: SortOrder
    year?: SortOrder
    vin?: SortOrder
    engineType?: SortOrder
    registrationNumber?: SortOrder
    pts?: SortOrder
    sts?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
    repairOrders?: RepairOrderOrderByRelationAggregateInput
    _relevance?: CarOrderByRelevanceInput
  }

  export type CarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    vin?: string
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    userId?: IntFilter<"Car"> | number
    brandId?: IntFilter<"Car"> | number
    model?: StringFilter<"Car"> | string
    year?: IntFilter<"Car"> | number
    engineType?: StringFilter<"Car"> | string
    registrationNumber?: StringFilter<"Car"> | string
    pts?: StringFilter<"Car"> | string
    sts?: StringFilter<"Car"> | string
    status?: StringFilter<"Car"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    repairOrders?: RepairOrderListRelationFilter
  }, "id" | "vin">

  export type CarOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    brandId?: SortOrder
    model?: SortOrder
    year?: SortOrder
    vin?: SortOrder
    engineType?: SortOrder
    registrationNumber?: SortOrder
    pts?: SortOrder
    sts?: SortOrder
    status?: SortOrder
    _count?: CarCountOrderByAggregateInput
    _avg?: CarAvgOrderByAggregateInput
    _max?: CarMaxOrderByAggregateInput
    _min?: CarMinOrderByAggregateInput
    _sum?: CarSumOrderByAggregateInput
  }

  export type CarScalarWhereWithAggregatesInput = {
    AND?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    OR?: CarScalarWhereWithAggregatesInput[]
    NOT?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Car"> | number
    userId?: IntWithAggregatesFilter<"Car"> | number
    brandId?: IntWithAggregatesFilter<"Car"> | number
    model?: StringWithAggregatesFilter<"Car"> | string
    year?: IntWithAggregatesFilter<"Car"> | number
    vin?: StringWithAggregatesFilter<"Car"> | string
    engineType?: StringWithAggregatesFilter<"Car"> | string
    registrationNumber?: StringWithAggregatesFilter<"Car"> | string
    pts?: StringWithAggregatesFilter<"Car"> | string
    sts?: StringWithAggregatesFilter<"Car"> | string
    status?: StringWithAggregatesFilter<"Car"> | string
  }

  export type RepairOrderWhereInput = {
    AND?: RepairOrderWhereInput | RepairOrderWhereInput[]
    OR?: RepairOrderWhereInput[]
    NOT?: RepairOrderWhereInput | RepairOrderWhereInput[]
    id?: IntFilter<"RepairOrder"> | number
    carId?: IntFilter<"RepairOrder"> | number
    userId?: IntFilter<"RepairOrder"> | number
    employeeId?: IntFilter<"RepairOrder"> | number
    status?: StringFilter<"RepairOrder"> | string
    materials?: StringFilter<"RepairOrder"> | string
    createdAt?: DateTimeFilter<"RepairOrder"> | Date | string
    createdBy?: IntFilter<"RepairOrder"> | number
    modifiedBy?: IntFilter<"RepairOrder"> | number
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    employee?: XOR<UserScalarRelationFilter, UserWhereInput>
    calendar?: ProductionCalendarListRelationFilter
    payments?: PaymentListRelationFilter
  }

  export type RepairOrderOrderByWithRelationInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrder
    employeeId?: SortOrder
    status?: SortOrder
    materials?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    modifiedBy?: SortOrder
    car?: CarOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    employee?: UserOrderByWithRelationInput
    calendar?: ProductionCalendarOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    _relevance?: RepairOrderOrderByRelevanceInput
  }

  export type RepairOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RepairOrderWhereInput | RepairOrderWhereInput[]
    OR?: RepairOrderWhereInput[]
    NOT?: RepairOrderWhereInput | RepairOrderWhereInput[]
    carId?: IntFilter<"RepairOrder"> | number
    userId?: IntFilter<"RepairOrder"> | number
    employeeId?: IntFilter<"RepairOrder"> | number
    status?: StringFilter<"RepairOrder"> | string
    materials?: StringFilter<"RepairOrder"> | string
    createdAt?: DateTimeFilter<"RepairOrder"> | Date | string
    createdBy?: IntFilter<"RepairOrder"> | number
    modifiedBy?: IntFilter<"RepairOrder"> | number
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    employee?: XOR<UserScalarRelationFilter, UserWhereInput>
    calendar?: ProductionCalendarListRelationFilter
    payments?: PaymentListRelationFilter
  }, "id">

  export type RepairOrderOrderByWithAggregationInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrder
    employeeId?: SortOrder
    status?: SortOrder
    materials?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    modifiedBy?: SortOrder
    _count?: RepairOrderCountOrderByAggregateInput
    _avg?: RepairOrderAvgOrderByAggregateInput
    _max?: RepairOrderMaxOrderByAggregateInput
    _min?: RepairOrderMinOrderByAggregateInput
    _sum?: RepairOrderSumOrderByAggregateInput
  }

  export type RepairOrderScalarWhereWithAggregatesInput = {
    AND?: RepairOrderScalarWhereWithAggregatesInput | RepairOrderScalarWhereWithAggregatesInput[]
    OR?: RepairOrderScalarWhereWithAggregatesInput[]
    NOT?: RepairOrderScalarWhereWithAggregatesInput | RepairOrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RepairOrder"> | number
    carId?: IntWithAggregatesFilter<"RepairOrder"> | number
    userId?: IntWithAggregatesFilter<"RepairOrder"> | number
    employeeId?: IntWithAggregatesFilter<"RepairOrder"> | number
    status?: StringWithAggregatesFilter<"RepairOrder"> | string
    materials?: StringWithAggregatesFilter<"RepairOrder"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RepairOrder"> | Date | string
    createdBy?: IntWithAggregatesFilter<"RepairOrder"> | number
    modifiedBy?: IntWithAggregatesFilter<"RepairOrder"> | number
  }

  export type PartWhereInput = {
    AND?: PartWhereInput | PartWhereInput[]
    OR?: PartWhereInput[]
    NOT?: PartWhereInput | PartWhereInput[]
    id?: IntFilter<"Part"> | number
    name?: StringFilter<"Part"> | string
    supplierId?: IntFilter<"Part"> | number
    price?: DecimalFilter<"Part"> | Decimal | DecimalJsLike | number | string
    lastUpdated?: DateTimeFilter<"Part"> | Date | string
  }

  export type PartOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    supplierId?: SortOrder
    price?: SortOrder
    lastUpdated?: SortOrder
    _relevance?: PartOrderByRelevanceInput
  }

  export type PartWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PartWhereInput | PartWhereInput[]
    OR?: PartWhereInput[]
    NOT?: PartWhereInput | PartWhereInput[]
    name?: StringFilter<"Part"> | string
    supplierId?: IntFilter<"Part"> | number
    price?: DecimalFilter<"Part"> | Decimal | DecimalJsLike | number | string
    lastUpdated?: DateTimeFilter<"Part"> | Date | string
  }, "id">

  export type PartOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    supplierId?: SortOrder
    price?: SortOrder
    lastUpdated?: SortOrder
    _count?: PartCountOrderByAggregateInput
    _avg?: PartAvgOrderByAggregateInput
    _max?: PartMaxOrderByAggregateInput
    _min?: PartMinOrderByAggregateInput
    _sum?: PartSumOrderByAggregateInput
  }

  export type PartScalarWhereWithAggregatesInput = {
    AND?: PartScalarWhereWithAggregatesInput | PartScalarWhereWithAggregatesInput[]
    OR?: PartScalarWhereWithAggregatesInput[]
    NOT?: PartScalarWhereWithAggregatesInput | PartScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Part"> | number
    name?: StringWithAggregatesFilter<"Part"> | string
    supplierId?: IntWithAggregatesFilter<"Part"> | number
    price?: DecimalWithAggregatesFilter<"Part"> | Decimal | DecimalJsLike | number | string
    lastUpdated?: DateTimeWithAggregatesFilter<"Part"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    repairOrderId?: IntFilter<"Payment"> | number
    userId?: IntFilter<"Payment"> | number
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    paymentMethod?: StringFilter<"Payment"> | string
    repairOrder?: XOR<RepairOrderScalarRelationFilter, RepairOrderWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    repairOrderId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    paymentMethod?: SortOrder
    repairOrder?: RepairOrderOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: PaymentOrderByRelevanceInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    repairOrderId?: IntFilter<"Payment"> | number
    userId?: IntFilter<"Payment"> | number
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    paymentMethod?: StringFilter<"Payment"> | string
    repairOrder?: XOR<RepairOrderScalarRelationFilter, RepairOrderWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    repairOrderId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    paymentMethod?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    repairOrderId?: IntWithAggregatesFilter<"Payment"> | number
    userId?: IntWithAggregatesFilter<"Payment"> | number
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    paymentMethod?: StringWithAggregatesFilter<"Payment"> | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: IntFilter<"Service"> | number
    title?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    price?: IntFilter<"Service"> | number
    image?: StringFilter<"Service"> | string
    category?: StringFilter<"Service"> | string
    format?: StringFilter<"Service"> | string
    brands?: StringFilter<"Service"> | string
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    image?: SortOrder
    category?: SortOrder
    format?: SortOrder
    brands?: SortOrder
    _relevance?: ServiceOrderByRelevanceInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    title?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    price?: IntFilter<"Service"> | number
    image?: StringFilter<"Service"> | string
    category?: StringFilter<"Service"> | string
    format?: StringFilter<"Service"> | string
    brands?: StringFilter<"Service"> | string
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    image?: SortOrder
    category?: SortOrder
    format?: SortOrder
    brands?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Service"> | number
    title?: StringWithAggregatesFilter<"Service"> | string
    description?: StringWithAggregatesFilter<"Service"> | string
    price?: IntWithAggregatesFilter<"Service"> | number
    image?: StringWithAggregatesFilter<"Service"> | string
    category?: StringWithAggregatesFilter<"Service"> | string
    format?: StringWithAggregatesFilter<"Service"> | string
    brands?: StringWithAggregatesFilter<"Service"> | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    phone: string
    avatar?: string | null
    created: Date | string
    createdBy: number
    modified?: Date | string | null
    modifiedBy?: number | null
    region: RegionCreateNestedOneWithoutUsersInput
    cars?: CarCreateNestedManyWithoutUserInput
    ordersUser?: RepairOrderCreateNestedManyWithoutUserInput
    ordersEmployee?: RepairOrderCreateNestedManyWithoutEmployeeInput
    employee?: EmployeeCreateNestedOneWithoutUserInput
    userRoles?: UserRoleCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone: string
    avatar?: string | null
    regionId: number
    created: Date | string
    createdBy: number
    modified?: Date | string | null
    modifiedBy?: number | null
    cars?: CarUncheckedCreateNestedManyWithoutUserInput
    ordersUser?: RepairOrderUncheckedCreateNestedManyWithoutUserInput
    ordersEmployee?: RepairOrderUncheckedCreateNestedManyWithoutEmployeeInput
    employee?: EmployeeUncheckedCreateNestedOneWithoutUserInput
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    region?: RegionUpdateOneRequiredWithoutUsersNestedInput
    cars?: CarUpdateManyWithoutUserNestedInput
    ordersUser?: RepairOrderUpdateManyWithoutUserNestedInput
    ordersEmployee?: RepairOrderUpdateManyWithoutEmployeeNestedInput
    employee?: EmployeeUpdateOneWithoutUserNestedInput
    userRoles?: UserRoleUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    regionId?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    cars?: CarUncheckedUpdateManyWithoutUserNestedInput
    ordersUser?: RepairOrderUncheckedUpdateManyWithoutUserNestedInput
    ordersEmployee?: RepairOrderUncheckedUpdateManyWithoutEmployeeNestedInput
    employee?: EmployeeUncheckedUpdateOneWithoutUserNestedInput
    userRoles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    phone: string
    avatar?: string | null
    regionId: number
    created: Date | string
    createdBy: number
    modified?: Date | string | null
    modifiedBy?: number | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    regionId?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RoleCreateInput = {
    name: string
    userRoles?: UserRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name: string
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    userRoles?: UserRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userRoles?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    name: string
  }

  export type RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleCreateInput = {
    user: UserCreateNestedOneWithoutUserRolesInput
    role: RoleCreateNestedOneWithoutUserRolesInput
  }

  export type UserRoleUncheckedCreateInput = {
    userId: number
    roleId: number
  }

  export type UserRoleUpdateInput = {
    user?: UserUpdateOneRequiredWithoutUserRolesNestedInput
    role?: RoleUpdateOneRequiredWithoutUserRolesNestedInput
  }

  export type UserRoleUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type UserRoleCreateManyInput = {
    userId: number
    roleId: number
  }

  export type UserRoleUpdateManyMutationInput = {

  }

  export type UserRoleUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type RegionCreateInput = {
    name: string
    region: string
    district: string
    users?: UserCreateNestedManyWithoutRegionInput
  }

  export type RegionUncheckedCreateInput = {
    id?: number
    name: string
    region: string
    district: string
    users?: UserUncheckedCreateNestedManyWithoutRegionInput
  }

  export type RegionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutRegionNestedInput
  }

  export type RegionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type RegionCreateManyInput = {
    id?: number
    name: string
    region: string
    district: string
  }

  export type RegionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
  }

  export type RegionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeCreateInput = {
    position: string
    salary?: Decimal | DecimalJsLike | number | string | null
    hiredDate?: Date | string | null
    created: Date | string
    createdBy: number
    modified?: Date | string | null
    modifiedBy?: number | null
    user: UserCreateNestedOneWithoutEmployeeInput
    workSchedules?: WorkScheduleCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: number
    userId: number
    position: string
    salary?: Decimal | DecimalJsLike | number | string | null
    hiredDate?: Date | string | null
    created: Date | string
    createdBy: number
    modified?: Date | string | null
    modifiedBy?: number | null
    workSchedules?: WorkScheduleUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    position?: StringFieldUpdateOperationsInput | string
    salary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutEmployeeNestedInput
    workSchedules?: WorkScheduleUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    salary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    workSchedules?: WorkScheduleUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: number
    userId: number
    position: string
    salary?: Decimal | DecimalJsLike | number | string | null
    hiredDate?: Date | string | null
    created: Date | string
    createdBy: number
    modified?: Date | string | null
    modifiedBy?: number | null
  }

  export type EmployeeUpdateManyMutationInput = {
    position?: StringFieldUpdateOperationsInput | string
    salary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    salary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WorkScheduleCreateInput = {
    workDate: Date | string
    startTime: Date | string
    endTime: Date | string
    status: string
    employee: EmployeeCreateNestedOneWithoutWorkSchedulesInput
    calendar?: ProductionCalendarCreateNestedManyWithoutWorkScheduleInput
  }

  export type WorkScheduleUncheckedCreateInput = {
    id?: number
    employeeId: number
    workDate: Date | string
    startTime: Date | string
    endTime: Date | string
    status: string
    calendar?: ProductionCalendarUncheckedCreateNestedManyWithoutWorkScheduleInput
  }

  export type WorkScheduleUpdateInput = {
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    employee?: EmployeeUpdateOneRequiredWithoutWorkSchedulesNestedInput
    calendar?: ProductionCalendarUpdateManyWithoutWorkScheduleNestedInput
  }

  export type WorkScheduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    calendar?: ProductionCalendarUncheckedUpdateManyWithoutWorkScheduleNestedInput
  }

  export type WorkScheduleCreateManyInput = {
    id?: number
    employeeId: number
    workDate: Date | string
    startTime: Date | string
    endTime: Date | string
    status: string
  }

  export type WorkScheduleUpdateManyMutationInput = {
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type WorkScheduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ProductionCalendarCreateInput = {
    workDate: Date | string
    isHoliday: boolean
    workSchedule: WorkScheduleCreateNestedOneWithoutCalendarInput
    orders?: RepairOrderCreateNestedOneWithoutCalendarInput
  }

  export type ProductionCalendarUncheckedCreateInput = {
    id?: number
    workScheduleId: number
    ordersId?: number | null
    workDate: Date | string
    isHoliday: boolean
  }

  export type ProductionCalendarUpdateInput = {
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isHoliday?: BoolFieldUpdateOperationsInput | boolean
    workSchedule?: WorkScheduleUpdateOneRequiredWithoutCalendarNestedInput
    orders?: RepairOrderUpdateOneWithoutCalendarNestedInput
  }

  export type ProductionCalendarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    workScheduleId?: IntFieldUpdateOperationsInput | number
    ordersId?: NullableIntFieldUpdateOperationsInput | number | null
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isHoliday?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductionCalendarCreateManyInput = {
    id?: number
    workScheduleId: number
    ordersId?: number | null
    workDate: Date | string
    isHoliday: boolean
  }

  export type ProductionCalendarUpdateManyMutationInput = {
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isHoliday?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductionCalendarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    workScheduleId?: IntFieldUpdateOperationsInput | number
    ordersId?: NullableIntFieldUpdateOperationsInput | number | null
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isHoliday?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CarCreateInput = {
    brandId: number
    model: string
    year: number
    vin: string
    engineType: string
    registrationNumber: string
    pts: string
    sts: string
    status: string
    user: UserCreateNestedOneWithoutCarsInput
    repairOrders?: RepairOrderCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateInput = {
    id?: number
    userId: number
    brandId: number
    model: string
    year: number
    vin: string
    engineType: string
    registrationNumber: string
    pts: string
    sts: string
    status: string
    repairOrders?: RepairOrderUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarUpdateInput = {
    brandId?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    vin?: StringFieldUpdateOperationsInput | string
    engineType?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    pts?: StringFieldUpdateOperationsInput | string
    sts?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCarsNestedInput
    repairOrders?: RepairOrderUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    brandId?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    vin?: StringFieldUpdateOperationsInput | string
    engineType?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    pts?: StringFieldUpdateOperationsInput | string
    sts?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    repairOrders?: RepairOrderUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarCreateManyInput = {
    id?: number
    userId: number
    brandId: number
    model: string
    year: number
    vin: string
    engineType: string
    registrationNumber: string
    pts: string
    sts: string
    status: string
  }

  export type CarUpdateManyMutationInput = {
    brandId?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    vin?: StringFieldUpdateOperationsInput | string
    engineType?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    pts?: StringFieldUpdateOperationsInput | string
    sts?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    brandId?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    vin?: StringFieldUpdateOperationsInput | string
    engineType?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    pts?: StringFieldUpdateOperationsInput | string
    sts?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type RepairOrderCreateInput = {
    status: string
    materials: string
    createdAt?: Date | string
    createdBy: number
    modifiedBy: number
    car: CarCreateNestedOneWithoutRepairOrdersInput
    user: UserCreateNestedOneWithoutOrdersUserInput
    employee: UserCreateNestedOneWithoutOrdersEmployeeInput
    calendar?: ProductionCalendarCreateNestedManyWithoutOrdersInput
    payments?: PaymentCreateNestedManyWithoutRepairOrderInput
  }

  export type RepairOrderUncheckedCreateInput = {
    id?: number
    carId: number
    userId: number
    employeeId: number
    status: string
    materials: string
    createdAt?: Date | string
    createdBy: number
    modifiedBy: number
    calendar?: ProductionCalendarUncheckedCreateNestedManyWithoutOrdersInput
    payments?: PaymentUncheckedCreateNestedManyWithoutRepairOrderInput
  }

  export type RepairOrderUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    materials?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modifiedBy?: IntFieldUpdateOperationsInput | number
    car?: CarUpdateOneRequiredWithoutRepairOrdersNestedInput
    user?: UserUpdateOneRequiredWithoutOrdersUserNestedInput
    employee?: UserUpdateOneRequiredWithoutOrdersEmployeeNestedInput
    calendar?: ProductionCalendarUpdateManyWithoutOrdersNestedInput
    payments?: PaymentUpdateManyWithoutRepairOrderNestedInput
  }

  export type RepairOrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    materials?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modifiedBy?: IntFieldUpdateOperationsInput | number
    calendar?: ProductionCalendarUncheckedUpdateManyWithoutOrdersNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutRepairOrderNestedInput
  }

  export type RepairOrderCreateManyInput = {
    id?: number
    carId: number
    userId: number
    employeeId: number
    status: string
    materials: string
    createdAt?: Date | string
    createdBy: number
    modifiedBy: number
  }

  export type RepairOrderUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    materials?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modifiedBy?: IntFieldUpdateOperationsInput | number
  }

  export type RepairOrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    materials?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modifiedBy?: IntFieldUpdateOperationsInput | number
  }

  export type PartCreateInput = {
    name: string
    supplierId: number
    price: Decimal | DecimalJsLike | number | string
    lastUpdated?: Date | string
  }

  export type PartUncheckedCreateInput = {
    id?: number
    name: string
    supplierId: number
    price: Decimal | DecimalJsLike | number | string
    lastUpdated?: Date | string
  }

  export type PartUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    supplierId?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    supplierId?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartCreateManyInput = {
    id?: number
    name: string
    supplierId: number
    price: Decimal | DecimalJsLike | number | string
    lastUpdated?: Date | string
  }

  export type PartUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    supplierId?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    supplierId?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    paymentDate?: Date | string
    paymentMethod: string
    repairOrder: RepairOrderCreateNestedOneWithoutPaymentsInput
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    repairOrderId: number
    userId: number
    amount: Decimal | DecimalJsLike | number | string
    paymentDate?: Date | string
    paymentMethod: string
  }

  export type PaymentUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    repairOrder?: RepairOrderUpdateOneRequiredWithoutPaymentsNestedInput
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    repairOrderId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateManyInput = {
    id?: number
    repairOrderId: number
    userId: number
    amount: Decimal | DecimalJsLike | number | string
    paymentDate?: Date | string
    paymentMethod: string
  }

  export type PaymentUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    repairOrderId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceCreateInput = {
    title: string
    description: string
    price: number
    image: string
    category: string
    format: string
    brands: string
  }

  export type ServiceUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    price: number
    image: string
    category: string
    format: string
    brands: string
  }

  export type ServiceUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    brands?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    brands?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceCreateManyInput = {
    id?: number
    title: string
    description: string
    price: number
    image: string
    category: string
    format: string
    brands: string
  }

  export type ServiceUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    brands?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    brands?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type RegionScalarRelationFilter = {
    is?: RegionWhereInput
    isNot?: RegionWhereInput
  }

  export type CarListRelationFilter = {
    every?: CarWhereInput
    some?: CarWhereInput
    none?: CarWhereInput
  }

  export type RepairOrderListRelationFilter = {
    every?: RepairOrderWhereInput
    some?: RepairOrderWhereInput
    none?: RepairOrderWhereInput
  }

  export type EmployeeNullableScalarRelationFilter = {
    is?: EmployeeWhereInput | null
    isNot?: EmployeeWhereInput | null
  }

  export type UserRoleListRelationFilter = {
    every?: UserRoleWhereInput
    some?: UserRoleWhereInput
    none?: UserRoleWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RepairOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    regionId?: SortOrder
    created?: SortOrder
    createdBy?: SortOrder
    modified?: SortOrder
    modifiedBy?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    regionId?: SortOrder
    createdBy?: SortOrder
    modifiedBy?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    regionId?: SortOrder
    created?: SortOrder
    createdBy?: SortOrder
    modified?: SortOrder
    modifiedBy?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    regionId?: SortOrder
    created?: SortOrder
    createdBy?: SortOrder
    modified?: SortOrder
    modifiedBy?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    regionId?: SortOrder
    createdBy?: SortOrder
    modifiedBy?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type RoleOrderByRelevanceInput = {
    fields: RoleOrderByRelevanceFieldEnum | RoleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type UserRoleUserIdRoleIdCompoundUniqueInput = {
    userId: number
    roleId: number
  }

  export type UserRoleCountOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserRoleAvgOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserRoleMaxOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserRoleMinOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserRoleSumOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegionOrderByRelevanceInput = {
    fields: RegionOrderByRelevanceFieldEnum | RegionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RegionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    district?: SortOrder
  }

  export type RegionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RegionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    district?: SortOrder
  }

  export type RegionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    district?: SortOrder
  }

  export type RegionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type WorkScheduleListRelationFilter = {
    every?: WorkScheduleWhereInput
    some?: WorkScheduleWhereInput
    none?: WorkScheduleWhereInput
  }

  export type WorkScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeOrderByRelevanceInput = {
    fields: EmployeeOrderByRelevanceFieldEnum | EmployeeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    position?: SortOrder
    salary?: SortOrder
    hiredDate?: SortOrder
    created?: SortOrder
    createdBy?: SortOrder
    modified?: SortOrder
    modifiedBy?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    salary?: SortOrder
    createdBy?: SortOrder
    modifiedBy?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    position?: SortOrder
    salary?: SortOrder
    hiredDate?: SortOrder
    created?: SortOrder
    createdBy?: SortOrder
    modified?: SortOrder
    modifiedBy?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    position?: SortOrder
    salary?: SortOrder
    hiredDate?: SortOrder
    created?: SortOrder
    createdBy?: SortOrder
    modified?: SortOrder
    modifiedBy?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    salary?: SortOrder
    createdBy?: SortOrder
    modifiedBy?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type ProductionCalendarListRelationFilter = {
    every?: ProductionCalendarWhereInput
    some?: ProductionCalendarWhereInput
    none?: ProductionCalendarWhereInput
  }

  export type ProductionCalendarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkScheduleOrderByRelevanceInput = {
    fields: WorkScheduleOrderByRelevanceFieldEnum | WorkScheduleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WorkScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    workDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
  }

  export type WorkScheduleAvgOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
  }

  export type WorkScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    workDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
  }

  export type WorkScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    workDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
  }

  export type WorkScheduleSumOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type WorkScheduleScalarRelationFilter = {
    is?: WorkScheduleWhereInput
    isNot?: WorkScheduleWhereInput
  }

  export type RepairOrderNullableScalarRelationFilter = {
    is?: RepairOrderWhereInput | null
    isNot?: RepairOrderWhereInput | null
  }

  export type ProductionCalendarCountOrderByAggregateInput = {
    id?: SortOrder
    workScheduleId?: SortOrder
    ordersId?: SortOrder
    workDate?: SortOrder
    isHoliday?: SortOrder
  }

  export type ProductionCalendarAvgOrderByAggregateInput = {
    id?: SortOrder
    workScheduleId?: SortOrder
    ordersId?: SortOrder
  }

  export type ProductionCalendarMaxOrderByAggregateInput = {
    id?: SortOrder
    workScheduleId?: SortOrder
    ordersId?: SortOrder
    workDate?: SortOrder
    isHoliday?: SortOrder
  }

  export type ProductionCalendarMinOrderByAggregateInput = {
    id?: SortOrder
    workScheduleId?: SortOrder
    ordersId?: SortOrder
    workDate?: SortOrder
    isHoliday?: SortOrder
  }

  export type ProductionCalendarSumOrderByAggregateInput = {
    id?: SortOrder
    workScheduleId?: SortOrder
    ordersId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CarOrderByRelevanceInput = {
    fields: CarOrderByRelevanceFieldEnum | CarOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CarCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    brandId?: SortOrder
    model?: SortOrder
    year?: SortOrder
    vin?: SortOrder
    engineType?: SortOrder
    registrationNumber?: SortOrder
    pts?: SortOrder
    sts?: SortOrder
    status?: SortOrder
  }

  export type CarAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    brandId?: SortOrder
    year?: SortOrder
  }

  export type CarMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    brandId?: SortOrder
    model?: SortOrder
    year?: SortOrder
    vin?: SortOrder
    engineType?: SortOrder
    registrationNumber?: SortOrder
    pts?: SortOrder
    sts?: SortOrder
    status?: SortOrder
  }

  export type CarMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    brandId?: SortOrder
    model?: SortOrder
    year?: SortOrder
    vin?: SortOrder
    engineType?: SortOrder
    registrationNumber?: SortOrder
    pts?: SortOrder
    sts?: SortOrder
    status?: SortOrder
  }

  export type CarSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    brandId?: SortOrder
    year?: SortOrder
  }

  export type CarScalarRelationFilter = {
    is?: CarWhereInput
    isNot?: CarWhereInput
  }

  export type RepairOrderOrderByRelevanceInput = {
    fields: RepairOrderOrderByRelevanceFieldEnum | RepairOrderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RepairOrderCountOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrder
    employeeId?: SortOrder
    status?: SortOrder
    materials?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    modifiedBy?: SortOrder
  }

  export type RepairOrderAvgOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrder
    employeeId?: SortOrder
    createdBy?: SortOrder
    modifiedBy?: SortOrder
  }

  export type RepairOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrder
    employeeId?: SortOrder
    status?: SortOrder
    materials?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    modifiedBy?: SortOrder
  }

  export type RepairOrderMinOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrder
    employeeId?: SortOrder
    status?: SortOrder
    materials?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    modifiedBy?: SortOrder
  }

  export type RepairOrderSumOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrder
    employeeId?: SortOrder
    createdBy?: SortOrder
    modifiedBy?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type PartOrderByRelevanceInput = {
    fields: PartOrderByRelevanceFieldEnum | PartOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PartCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    supplierId?: SortOrder
    price?: SortOrder
    lastUpdated?: SortOrder
  }

  export type PartAvgOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    price?: SortOrder
  }

  export type PartMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    supplierId?: SortOrder
    price?: SortOrder
    lastUpdated?: SortOrder
  }

  export type PartMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    supplierId?: SortOrder
    price?: SortOrder
    lastUpdated?: SortOrder
  }

  export type PartSumOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    price?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
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

  export type RepairOrderScalarRelationFilter = {
    is?: RepairOrderWhereInput
    isNot?: RepairOrderWhereInput
  }

  export type PaymentOrderByRelevanceInput = {
    fields: PaymentOrderByRelevanceFieldEnum | PaymentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    repairOrderId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    paymentMethod?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    repairOrderId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    repairOrderId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    paymentMethod?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    repairOrderId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    paymentMethod?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    repairOrderId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type ServiceOrderByRelevanceInput = {
    fields: ServiceOrderByRelevanceFieldEnum | ServiceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    image?: SortOrder
    category?: SortOrder
    format?: SortOrder
    brands?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    image?: SortOrder
    category?: SortOrder
    format?: SortOrder
    brands?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    image?: SortOrder
    category?: SortOrder
    format?: SortOrder
    brands?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type RegionCreateNestedOneWithoutUsersInput = {
    create?: XOR<RegionCreateWithoutUsersInput, RegionUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RegionCreateOrConnectWithoutUsersInput
    connect?: RegionWhereUniqueInput
  }

  export type CarCreateNestedManyWithoutUserInput = {
    create?: XOR<CarCreateWithoutUserInput, CarUncheckedCreateWithoutUserInput> | CarCreateWithoutUserInput[] | CarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CarCreateOrConnectWithoutUserInput | CarCreateOrConnectWithoutUserInput[]
    createMany?: CarCreateManyUserInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type RepairOrderCreateNestedManyWithoutUserInput = {
    create?: XOR<RepairOrderCreateWithoutUserInput, RepairOrderUncheckedCreateWithoutUserInput> | RepairOrderCreateWithoutUserInput[] | RepairOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RepairOrderCreateOrConnectWithoutUserInput | RepairOrderCreateOrConnectWithoutUserInput[]
    createMany?: RepairOrderCreateManyUserInputEnvelope
    connect?: RepairOrderWhereUniqueInput | RepairOrderWhereUniqueInput[]
  }

  export type RepairOrderCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<RepairOrderCreateWithoutEmployeeInput, RepairOrderUncheckedCreateWithoutEmployeeInput> | RepairOrderCreateWithoutEmployeeInput[] | RepairOrderUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: RepairOrderCreateOrConnectWithoutEmployeeInput | RepairOrderCreateOrConnectWithoutEmployeeInput[]
    createMany?: RepairOrderCreateManyEmployeeInputEnvelope
    connect?: RepairOrderWhereUniqueInput | RepairOrderWhereUniqueInput[]
  }

  export type EmployeeCreateNestedOneWithoutUserInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    connect?: EmployeeWhereUniqueInput
  }

  export type UserRoleCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type CarUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CarCreateWithoutUserInput, CarUncheckedCreateWithoutUserInput> | CarCreateWithoutUserInput[] | CarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CarCreateOrConnectWithoutUserInput | CarCreateOrConnectWithoutUserInput[]
    createMany?: CarCreateManyUserInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type RepairOrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RepairOrderCreateWithoutUserInput, RepairOrderUncheckedCreateWithoutUserInput> | RepairOrderCreateWithoutUserInput[] | RepairOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RepairOrderCreateOrConnectWithoutUserInput | RepairOrderCreateOrConnectWithoutUserInput[]
    createMany?: RepairOrderCreateManyUserInputEnvelope
    connect?: RepairOrderWhereUniqueInput | RepairOrderWhereUniqueInput[]
  }

  export type RepairOrderUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<RepairOrderCreateWithoutEmployeeInput, RepairOrderUncheckedCreateWithoutEmployeeInput> | RepairOrderCreateWithoutEmployeeInput[] | RepairOrderUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: RepairOrderCreateOrConnectWithoutEmployeeInput | RepairOrderCreateOrConnectWithoutEmployeeInput[]
    createMany?: RepairOrderCreateManyEmployeeInputEnvelope
    connect?: RepairOrderWhereUniqueInput | RepairOrderWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    connect?: EmployeeWhereUniqueInput
  }

  export type UserRoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RegionUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RegionCreateWithoutUsersInput, RegionUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RegionCreateOrConnectWithoutUsersInput
    upsert?: RegionUpsertWithoutUsersInput
    connect?: RegionWhereUniqueInput
    update?: XOR<XOR<RegionUpdateToOneWithWhereWithoutUsersInput, RegionUpdateWithoutUsersInput>, RegionUncheckedUpdateWithoutUsersInput>
  }

  export type CarUpdateManyWithoutUserNestedInput = {
    create?: XOR<CarCreateWithoutUserInput, CarUncheckedCreateWithoutUserInput> | CarCreateWithoutUserInput[] | CarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CarCreateOrConnectWithoutUserInput | CarCreateOrConnectWithoutUserInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutUserInput | CarUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CarCreateManyUserInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutUserInput | CarUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CarUpdateManyWithWhereWithoutUserInput | CarUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type RepairOrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<RepairOrderCreateWithoutUserInput, RepairOrderUncheckedCreateWithoutUserInput> | RepairOrderCreateWithoutUserInput[] | RepairOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RepairOrderCreateOrConnectWithoutUserInput | RepairOrderCreateOrConnectWithoutUserInput[]
    upsert?: RepairOrderUpsertWithWhereUniqueWithoutUserInput | RepairOrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RepairOrderCreateManyUserInputEnvelope
    set?: RepairOrderWhereUniqueInput | RepairOrderWhereUniqueInput[]
    disconnect?: RepairOrderWhereUniqueInput | RepairOrderWhereUniqueInput[]
    delete?: RepairOrderWhereUniqueInput | RepairOrderWhereUniqueInput[]
    connect?: RepairOrderWhereUniqueInput | RepairOrderWhereUniqueInput[]
    update?: RepairOrderUpdateWithWhereUniqueWithoutUserInput | RepairOrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RepairOrderUpdateManyWithWhereWithoutUserInput | RepairOrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RepairOrderScalarWhereInput | RepairOrderScalarWhereInput[]
  }

  export type RepairOrderUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<RepairOrderCreateWithoutEmployeeInput, RepairOrderUncheckedCreateWithoutEmployeeInput> | RepairOrderCreateWithoutEmployeeInput[] | RepairOrderUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: RepairOrderCreateOrConnectWithoutEmployeeInput | RepairOrderCreateOrConnectWithoutEmployeeInput[]
    upsert?: RepairOrderUpsertWithWhereUniqueWithoutEmployeeInput | RepairOrderUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: RepairOrderCreateManyEmployeeInputEnvelope
    set?: RepairOrderWhereUniqueInput | RepairOrderWhereUniqueInput[]
    disconnect?: RepairOrderWhereUniqueInput | RepairOrderWhereUniqueInput[]
    delete?: RepairOrderWhereUniqueInput | RepairOrderWhereUniqueInput[]
    connect?: RepairOrderWhereUniqueInput | RepairOrderWhereUniqueInput[]
    update?: RepairOrderUpdateWithWhereUniqueWithoutEmployeeInput | RepairOrderUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: RepairOrderUpdateManyWithWhereWithoutEmployeeInput | RepairOrderUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: RepairOrderScalarWhereInput | RepairOrderScalarWhereInput[]
  }

  export type EmployeeUpdateOneWithoutUserNestedInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    upsert?: EmployeeUpsertWithoutUserInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutUserInput, EmployeeUpdateWithoutUserInput>, EmployeeUncheckedUpdateWithoutUserInput>
  }

  export type UserRoleUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type CarUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CarCreateWithoutUserInput, CarUncheckedCreateWithoutUserInput> | CarCreateWithoutUserInput[] | CarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CarCreateOrConnectWithoutUserInput | CarCreateOrConnectWithoutUserInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutUserInput | CarUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CarCreateManyUserInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutUserInput | CarUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CarUpdateManyWithWhereWithoutUserInput | CarUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type RepairOrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RepairOrderCreateWithoutUserInput, RepairOrderUncheckedCreateWithoutUserInput> | RepairOrderCreateWithoutUserInput[] | RepairOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RepairOrderCreateOrConnectWithoutUserInput | RepairOrderCreateOrConnectWithoutUserInput[]
    upsert?: RepairOrderUpsertWithWhereUniqueWithoutUserInput | RepairOrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RepairOrderCreateManyUserInputEnvelope
    set?: RepairOrderWhereUniqueInput | RepairOrderWhereUniqueInput[]
    disconnect?: RepairOrderWhereUniqueInput | RepairOrderWhereUniqueInput[]
    delete?: RepairOrderWhereUniqueInput | RepairOrderWhereUniqueInput[]
    connect?: RepairOrderWhereUniqueInput | RepairOrderWhereUniqueInput[]
    update?: RepairOrderUpdateWithWhereUniqueWithoutUserInput | RepairOrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RepairOrderUpdateManyWithWhereWithoutUserInput | RepairOrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RepairOrderScalarWhereInput | RepairOrderScalarWhereInput[]
  }

  export type RepairOrderUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<RepairOrderCreateWithoutEmployeeInput, RepairOrderUncheckedCreateWithoutEmployeeInput> | RepairOrderCreateWithoutEmployeeInput[] | RepairOrderUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: RepairOrderCreateOrConnectWithoutEmployeeInput | RepairOrderCreateOrConnectWithoutEmployeeInput[]
    upsert?: RepairOrderUpsertWithWhereUniqueWithoutEmployeeInput | RepairOrderUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: RepairOrderCreateManyEmployeeInputEnvelope
    set?: RepairOrderWhereUniqueInput | RepairOrderWhereUniqueInput[]
    disconnect?: RepairOrderWhereUniqueInput | RepairOrderWhereUniqueInput[]
    delete?: RepairOrderWhereUniqueInput | RepairOrderWhereUniqueInput[]
    connect?: RepairOrderWhereUniqueInput | RepairOrderWhereUniqueInput[]
    update?: RepairOrderUpdateWithWhereUniqueWithoutEmployeeInput | RepairOrderUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: RepairOrderUpdateManyWithWhereWithoutEmployeeInput | RepairOrderUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: RepairOrderScalarWhereInput | RepairOrderScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    upsert?: EmployeeUpsertWithoutUserInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutUserInput, EmployeeUpdateWithoutUserInput>, EmployeeUncheckedUpdateWithoutUserInput>
  }

  export type UserRoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UserRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type UserRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserRolesInput = {
    create?: XOR<UserCreateWithoutUserRolesInput, UserUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserRolesInput
    connect?: UserWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutUserRolesInput = {
    create?: XOR<RoleCreateWithoutUserRolesInput, RoleUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserRolesInput
    connect?: RoleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserRolesNestedInput = {
    create?: XOR<UserCreateWithoutUserRolesInput, UserUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserRolesInput
    upsert?: UserUpsertWithoutUserRolesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserRolesInput, UserUpdateWithoutUserRolesInput>, UserUncheckedUpdateWithoutUserRolesInput>
  }

  export type RoleUpdateOneRequiredWithoutUserRolesNestedInput = {
    create?: XOR<RoleCreateWithoutUserRolesInput, RoleUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserRolesInput
    upsert?: RoleUpsertWithoutUserRolesInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUserRolesInput, RoleUpdateWithoutUserRolesInput>, RoleUncheckedUpdateWithoutUserRolesInput>
  }

  export type UserCreateNestedManyWithoutRegionInput = {
    create?: XOR<UserCreateWithoutRegionInput, UserUncheckedCreateWithoutRegionInput> | UserCreateWithoutRegionInput[] | UserUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRegionInput | UserCreateOrConnectWithoutRegionInput[]
    createMany?: UserCreateManyRegionInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRegionInput = {
    create?: XOR<UserCreateWithoutRegionInput, UserUncheckedCreateWithoutRegionInput> | UserCreateWithoutRegionInput[] | UserUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRegionInput | UserCreateOrConnectWithoutRegionInput[]
    createMany?: UserCreateManyRegionInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutRegionNestedInput = {
    create?: XOR<UserCreateWithoutRegionInput, UserUncheckedCreateWithoutRegionInput> | UserCreateWithoutRegionInput[] | UserUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRegionInput | UserCreateOrConnectWithoutRegionInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRegionInput | UserUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: UserCreateManyRegionInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRegionInput | UserUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRegionInput | UserUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRegionNestedInput = {
    create?: XOR<UserCreateWithoutRegionInput, UserUncheckedCreateWithoutRegionInput> | UserCreateWithoutRegionInput[] | UserUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRegionInput | UserCreateOrConnectWithoutRegionInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRegionInput | UserUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: UserCreateManyRegionInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRegionInput | UserUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRegionInput | UserUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput
    connect?: UserWhereUniqueInput
  }

  export type WorkScheduleCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<WorkScheduleCreateWithoutEmployeeInput, WorkScheduleUncheckedCreateWithoutEmployeeInput> | WorkScheduleCreateWithoutEmployeeInput[] | WorkScheduleUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: WorkScheduleCreateOrConnectWithoutEmployeeInput | WorkScheduleCreateOrConnectWithoutEmployeeInput[]
    createMany?: WorkScheduleCreateManyEmployeeInputEnvelope
    connect?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
  }

  export type WorkScheduleUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<WorkScheduleCreateWithoutEmployeeInput, WorkScheduleUncheckedCreateWithoutEmployeeInput> | WorkScheduleCreateWithoutEmployeeInput[] | WorkScheduleUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: WorkScheduleCreateOrConnectWithoutEmployeeInput | WorkScheduleCreateOrConnectWithoutEmployeeInput[]
    createMany?: WorkScheduleCreateManyEmployeeInputEnvelope
    connect?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput
    upsert?: UserUpsertWithoutEmployeeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmployeeInput, UserUpdateWithoutEmployeeInput>, UserUncheckedUpdateWithoutEmployeeInput>
  }

  export type WorkScheduleUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<WorkScheduleCreateWithoutEmployeeInput, WorkScheduleUncheckedCreateWithoutEmployeeInput> | WorkScheduleCreateWithoutEmployeeInput[] | WorkScheduleUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: WorkScheduleCreateOrConnectWithoutEmployeeInput | WorkScheduleCreateOrConnectWithoutEmployeeInput[]
    upsert?: WorkScheduleUpsertWithWhereUniqueWithoutEmployeeInput | WorkScheduleUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: WorkScheduleCreateManyEmployeeInputEnvelope
    set?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    disconnect?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    delete?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    connect?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    update?: WorkScheduleUpdateWithWhereUniqueWithoutEmployeeInput | WorkScheduleUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: WorkScheduleUpdateManyWithWhereWithoutEmployeeInput | WorkScheduleUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: WorkScheduleScalarWhereInput | WorkScheduleScalarWhereInput[]
  }

  export type WorkScheduleUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<WorkScheduleCreateWithoutEmployeeInput, WorkScheduleUncheckedCreateWithoutEmployeeInput> | WorkScheduleCreateWithoutEmployeeInput[] | WorkScheduleUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: WorkScheduleCreateOrConnectWithoutEmployeeInput | WorkScheduleCreateOrConnectWithoutEmployeeInput[]
    upsert?: WorkScheduleUpsertWithWhereUniqueWithoutEmployeeInput | WorkScheduleUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: WorkScheduleCreateManyEmployeeInputEnvelope
    set?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    disconnect?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    delete?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    connect?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    update?: WorkScheduleUpdateWithWhereUniqueWithoutEmployeeInput | WorkScheduleUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: WorkScheduleUpdateManyWithWhereWithoutEmployeeInput | WorkScheduleUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: WorkScheduleScalarWhereInput | WorkScheduleScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutWorkSchedulesInput = {
    create?: XOR<EmployeeCreateWithoutWorkSchedulesInput, EmployeeUncheckedCreateWithoutWorkSchedulesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutWorkSchedulesInput
    connect?: EmployeeWhereUniqueInput
  }

  export type ProductionCalendarCreateNestedManyWithoutWorkScheduleInput = {
    create?: XOR<ProductionCalendarCreateWithoutWorkScheduleInput, ProductionCalendarUncheckedCreateWithoutWorkScheduleInput> | ProductionCalendarCreateWithoutWorkScheduleInput[] | ProductionCalendarUncheckedCreateWithoutWorkScheduleInput[]
    connectOrCreate?: ProductionCalendarCreateOrConnectWithoutWorkScheduleInput | ProductionCalendarCreateOrConnectWithoutWorkScheduleInput[]
    createMany?: ProductionCalendarCreateManyWorkScheduleInputEnvelope
    connect?: ProductionCalendarWhereUniqueInput | ProductionCalendarWhereUniqueInput[]
  }

  export type ProductionCalendarUncheckedCreateNestedManyWithoutWorkScheduleInput = {
    create?: XOR<ProductionCalendarCreateWithoutWorkScheduleInput, ProductionCalendarUncheckedCreateWithoutWorkScheduleInput> | ProductionCalendarCreateWithoutWorkScheduleInput[] | ProductionCalendarUncheckedCreateWithoutWorkScheduleInput[]
    connectOrCreate?: ProductionCalendarCreateOrConnectWithoutWorkScheduleInput | ProductionCalendarCreateOrConnectWithoutWorkScheduleInput[]
    createMany?: ProductionCalendarCreateManyWorkScheduleInputEnvelope
    connect?: ProductionCalendarWhereUniqueInput | ProductionCalendarWhereUniqueInput[]
  }

  export type EmployeeUpdateOneRequiredWithoutWorkSchedulesNestedInput = {
    create?: XOR<EmployeeCreateWithoutWorkSchedulesInput, EmployeeUncheckedCreateWithoutWorkSchedulesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutWorkSchedulesInput
    upsert?: EmployeeUpsertWithoutWorkSchedulesInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutWorkSchedulesInput, EmployeeUpdateWithoutWorkSchedulesInput>, EmployeeUncheckedUpdateWithoutWorkSchedulesInput>
  }

  export type ProductionCalendarUpdateManyWithoutWorkScheduleNestedInput = {
    create?: XOR<ProductionCalendarCreateWithoutWorkScheduleInput, ProductionCalendarUncheckedCreateWithoutWorkScheduleInput> | ProductionCalendarCreateWithoutWorkScheduleInput[] | ProductionCalendarUncheckedCreateWithoutWorkScheduleInput[]
    connectOrCreate?: ProductionCalendarCreateOrConnectWithoutWorkScheduleInput | ProductionCalendarCreateOrConnectWithoutWorkScheduleInput[]
    upsert?: ProductionCalendarUpsertWithWhereUniqueWithoutWorkScheduleInput | ProductionCalendarUpsertWithWhereUniqueWithoutWorkScheduleInput[]
    createMany?: ProductionCalendarCreateManyWorkScheduleInputEnvelope
    set?: ProductionCalendarWhereUniqueInput | ProductionCalendarWhereUniqueInput[]
    disconnect?: ProductionCalendarWhereUniqueInput | ProductionCalendarWhereUniqueInput[]
    delete?: ProductionCalendarWhereUniqueInput | ProductionCalendarWhereUniqueInput[]
    connect?: ProductionCalendarWhereUniqueInput | ProductionCalendarWhereUniqueInput[]
    update?: ProductionCalendarUpdateWithWhereUniqueWithoutWorkScheduleInput | ProductionCalendarUpdateWithWhereUniqueWithoutWorkScheduleInput[]
    updateMany?: ProductionCalendarUpdateManyWithWhereWithoutWorkScheduleInput | ProductionCalendarUpdateManyWithWhereWithoutWorkScheduleInput[]
    deleteMany?: ProductionCalendarScalarWhereInput | ProductionCalendarScalarWhereInput[]
  }

  export type ProductionCalendarUncheckedUpdateManyWithoutWorkScheduleNestedInput = {
    create?: XOR<ProductionCalendarCreateWithoutWorkScheduleInput, ProductionCalendarUncheckedCreateWithoutWorkScheduleInput> | ProductionCalendarCreateWithoutWorkScheduleInput[] | ProductionCalendarUncheckedCreateWithoutWorkScheduleInput[]
    connectOrCreate?: ProductionCalendarCreateOrConnectWithoutWorkScheduleInput | ProductionCalendarCreateOrConnectWithoutWorkScheduleInput[]
    upsert?: ProductionCalendarUpsertWithWhereUniqueWithoutWorkScheduleInput | ProductionCalendarUpsertWithWhereUniqueWithoutWorkScheduleInput[]
    createMany?: ProductionCalendarCreateManyWorkScheduleInputEnvelope
    set?: ProductionCalendarWhereUniqueInput | ProductionCalendarWhereUniqueInput[]
    disconnect?: ProductionCalendarWhereUniqueInput | ProductionCalendarWhereUniqueInput[]
    delete?: ProductionCalendarWhereUniqueInput | ProductionCalendarWhereUniqueInput[]
    connect?: ProductionCalendarWhereUniqueInput | ProductionCalendarWhereUniqueInput[]
    update?: ProductionCalendarUpdateWithWhereUniqueWithoutWorkScheduleInput | ProductionCalendarUpdateWithWhereUniqueWithoutWorkScheduleInput[]
    updateMany?: ProductionCalendarUpdateManyWithWhereWithoutWorkScheduleInput | ProductionCalendarUpdateManyWithWhereWithoutWorkScheduleInput[]
    deleteMany?: ProductionCalendarScalarWhereInput | ProductionCalendarScalarWhereInput[]
  }

  export type WorkScheduleCreateNestedOneWithoutCalendarInput = {
    create?: XOR<WorkScheduleCreateWithoutCalendarInput, WorkScheduleUncheckedCreateWithoutCalendarInput>
    connectOrCreate?: WorkScheduleCreateOrConnectWithoutCalendarInput
    connect?: WorkScheduleWhereUniqueInput
  }

  export type RepairOrderCreateNestedOneWithoutCalendarInput = {
    create?: XOR<RepairOrderCreateWithoutCalendarInput, RepairOrderUncheckedCreateWithoutCalendarInput>
    connectOrCreate?: RepairOrderCreateOrConnectWithoutCalendarInput
    connect?: RepairOrderWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type WorkScheduleUpdateOneRequiredWithoutCalendarNestedInput = {
    create?: XOR<WorkScheduleCreateWithoutCalendarInput, WorkScheduleUncheckedCreateWithoutCalendarInput>
    connectOrCreate?: WorkScheduleCreateOrConnectWithoutCalendarInput
    upsert?: WorkScheduleUpsertWithoutCalendarInput
    connect?: WorkScheduleWhereUniqueInput
    update?: XOR<XOR<WorkScheduleUpdateToOneWithWhereWithoutCalendarInput, WorkScheduleUpdateWithoutCalendarInput>, WorkScheduleUncheckedUpdateWithoutCalendarInput>
  }

  export type RepairOrderUpdateOneWithoutCalendarNestedInput = {
    create?: XOR<RepairOrderCreateWithoutCalendarInput, RepairOrderUncheckedCreateWithoutCalendarInput>
    connectOrCreate?: RepairOrderCreateOrConnectWithoutCalendarInput
    upsert?: RepairOrderUpsertWithoutCalendarInput
    disconnect?: RepairOrderWhereInput | boolean
    delete?: RepairOrderWhereInput | boolean
    connect?: RepairOrderWhereUniqueInput
    update?: XOR<XOR<RepairOrderUpdateToOneWithWhereWithoutCalendarInput, RepairOrderUpdateWithoutCalendarInput>, RepairOrderUncheckedUpdateWithoutCalendarInput>
  }

  export type UserCreateNestedOneWithoutCarsInput = {
    create?: XOR<UserCreateWithoutCarsInput, UserUncheckedCreateWithoutCarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCarsInput
    connect?: UserWhereUniqueInput
  }

  export type RepairOrderCreateNestedManyWithoutCarInput = {
    create?: XOR<RepairOrderCreateWithoutCarInput, RepairOrderUncheckedCreateWithoutCarInput> | RepairOrderCreateWithoutCarInput[] | RepairOrderUncheckedCreateWithoutCarInput[]
    connectOrCreate?: RepairOrderCreateOrConnectWithoutCarInput | RepairOrderCreateOrConnectWithoutCarInput[]
    createMany?: RepairOrderCreateManyCarInputEnvelope
    connect?: RepairOrderWhereUniqueInput | RepairOrderWhereUniqueInput[]
  }

  export type RepairOrderUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<RepairOrderCreateWithoutCarInput, RepairOrderUncheckedCreateWithoutCarInput> | RepairOrderCreateWithoutCarInput[] | RepairOrderUncheckedCreateWithoutCarInput[]
    connectOrCreate?: RepairOrderCreateOrConnectWithoutCarInput | RepairOrderCreateOrConnectWithoutCarInput[]
    createMany?: RepairOrderCreateManyCarInputEnvelope
    connect?: RepairOrderWhereUniqueInput | RepairOrderWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCarsNestedInput = {
    create?: XOR<UserCreateWithoutCarsInput, UserUncheckedCreateWithoutCarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCarsInput
    upsert?: UserUpsertWithoutCarsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCarsInput, UserUpdateWithoutCarsInput>, UserUncheckedUpdateWithoutCarsInput>
  }

  export type RepairOrderUpdateManyWithoutCarNestedInput = {
    create?: XOR<RepairOrderCreateWithoutCarInput, RepairOrderUncheckedCreateWithoutCarInput> | RepairOrderCreateWithoutCarInput[] | RepairOrderUncheckedCreateWithoutCarInput[]
    connectOrCreate?: RepairOrderCreateOrConnectWithoutCarInput | RepairOrderCreateOrConnectWithoutCarInput[]
    upsert?: RepairOrderUpsertWithWhereUniqueWithoutCarInput | RepairOrderUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: RepairOrderCreateManyCarInputEnvelope
    set?: RepairOrderWhereUniqueInput | RepairOrderWhereUniqueInput[]
    disconnect?: RepairOrderWhereUniqueInput | RepairOrderWhereUniqueInput[]
    delete?: RepairOrderWhereUniqueInput | RepairOrderWhereUniqueInput[]
    connect?: RepairOrderWhereUniqueInput | RepairOrderWhereUniqueInput[]
    update?: RepairOrderUpdateWithWhereUniqueWithoutCarInput | RepairOrderUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: RepairOrderUpdateManyWithWhereWithoutCarInput | RepairOrderUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: RepairOrderScalarWhereInput | RepairOrderScalarWhereInput[]
  }

  export type RepairOrderUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<RepairOrderCreateWithoutCarInput, RepairOrderUncheckedCreateWithoutCarInput> | RepairOrderCreateWithoutCarInput[] | RepairOrderUncheckedCreateWithoutCarInput[]
    connectOrCreate?: RepairOrderCreateOrConnectWithoutCarInput | RepairOrderCreateOrConnectWithoutCarInput[]
    upsert?: RepairOrderUpsertWithWhereUniqueWithoutCarInput | RepairOrderUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: RepairOrderCreateManyCarInputEnvelope
    set?: RepairOrderWhereUniqueInput | RepairOrderWhereUniqueInput[]
    disconnect?: RepairOrderWhereUniqueInput | RepairOrderWhereUniqueInput[]
    delete?: RepairOrderWhereUniqueInput | RepairOrderWhereUniqueInput[]
    connect?: RepairOrderWhereUniqueInput | RepairOrderWhereUniqueInput[]
    update?: RepairOrderUpdateWithWhereUniqueWithoutCarInput | RepairOrderUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: RepairOrderUpdateManyWithWhereWithoutCarInput | RepairOrderUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: RepairOrderScalarWhereInput | RepairOrderScalarWhereInput[]
  }

  export type CarCreateNestedOneWithoutRepairOrdersInput = {
    create?: XOR<CarCreateWithoutRepairOrdersInput, CarUncheckedCreateWithoutRepairOrdersInput>
    connectOrCreate?: CarCreateOrConnectWithoutRepairOrdersInput
    connect?: CarWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOrdersUserInput = {
    create?: XOR<UserCreateWithoutOrdersUserInput, UserUncheckedCreateWithoutOrdersUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersUserInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOrdersEmployeeInput = {
    create?: XOR<UserCreateWithoutOrdersEmployeeInput, UserUncheckedCreateWithoutOrdersEmployeeInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersEmployeeInput
    connect?: UserWhereUniqueInput
  }

  export type ProductionCalendarCreateNestedManyWithoutOrdersInput = {
    create?: XOR<ProductionCalendarCreateWithoutOrdersInput, ProductionCalendarUncheckedCreateWithoutOrdersInput> | ProductionCalendarCreateWithoutOrdersInput[] | ProductionCalendarUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: ProductionCalendarCreateOrConnectWithoutOrdersInput | ProductionCalendarCreateOrConnectWithoutOrdersInput[]
    createMany?: ProductionCalendarCreateManyOrdersInputEnvelope
    connect?: ProductionCalendarWhereUniqueInput | ProductionCalendarWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutRepairOrderInput = {
    create?: XOR<PaymentCreateWithoutRepairOrderInput, PaymentUncheckedCreateWithoutRepairOrderInput> | PaymentCreateWithoutRepairOrderInput[] | PaymentUncheckedCreateWithoutRepairOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutRepairOrderInput | PaymentCreateOrConnectWithoutRepairOrderInput[]
    createMany?: PaymentCreateManyRepairOrderInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type ProductionCalendarUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<ProductionCalendarCreateWithoutOrdersInput, ProductionCalendarUncheckedCreateWithoutOrdersInput> | ProductionCalendarCreateWithoutOrdersInput[] | ProductionCalendarUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: ProductionCalendarCreateOrConnectWithoutOrdersInput | ProductionCalendarCreateOrConnectWithoutOrdersInput[]
    createMany?: ProductionCalendarCreateManyOrdersInputEnvelope
    connect?: ProductionCalendarWhereUniqueInput | ProductionCalendarWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutRepairOrderInput = {
    create?: XOR<PaymentCreateWithoutRepairOrderInput, PaymentUncheckedCreateWithoutRepairOrderInput> | PaymentCreateWithoutRepairOrderInput[] | PaymentUncheckedCreateWithoutRepairOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutRepairOrderInput | PaymentCreateOrConnectWithoutRepairOrderInput[]
    createMany?: PaymentCreateManyRepairOrderInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type CarUpdateOneRequiredWithoutRepairOrdersNestedInput = {
    create?: XOR<CarCreateWithoutRepairOrdersInput, CarUncheckedCreateWithoutRepairOrdersInput>
    connectOrCreate?: CarCreateOrConnectWithoutRepairOrdersInput
    upsert?: CarUpsertWithoutRepairOrdersInput
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutRepairOrdersInput, CarUpdateWithoutRepairOrdersInput>, CarUncheckedUpdateWithoutRepairOrdersInput>
  }

  export type UserUpdateOneRequiredWithoutOrdersUserNestedInput = {
    create?: XOR<UserCreateWithoutOrdersUserInput, UserUncheckedCreateWithoutOrdersUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersUserInput
    upsert?: UserUpsertWithoutOrdersUserInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersUserInput, UserUpdateWithoutOrdersUserInput>, UserUncheckedUpdateWithoutOrdersUserInput>
  }

  export type UserUpdateOneRequiredWithoutOrdersEmployeeNestedInput = {
    create?: XOR<UserCreateWithoutOrdersEmployeeInput, UserUncheckedCreateWithoutOrdersEmployeeInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersEmployeeInput
    upsert?: UserUpsertWithoutOrdersEmployeeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersEmployeeInput, UserUpdateWithoutOrdersEmployeeInput>, UserUncheckedUpdateWithoutOrdersEmployeeInput>
  }

  export type ProductionCalendarUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<ProductionCalendarCreateWithoutOrdersInput, ProductionCalendarUncheckedCreateWithoutOrdersInput> | ProductionCalendarCreateWithoutOrdersInput[] | ProductionCalendarUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: ProductionCalendarCreateOrConnectWithoutOrdersInput | ProductionCalendarCreateOrConnectWithoutOrdersInput[]
    upsert?: ProductionCalendarUpsertWithWhereUniqueWithoutOrdersInput | ProductionCalendarUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: ProductionCalendarCreateManyOrdersInputEnvelope
    set?: ProductionCalendarWhereUniqueInput | ProductionCalendarWhereUniqueInput[]
    disconnect?: ProductionCalendarWhereUniqueInput | ProductionCalendarWhereUniqueInput[]
    delete?: ProductionCalendarWhereUniqueInput | ProductionCalendarWhereUniqueInput[]
    connect?: ProductionCalendarWhereUniqueInput | ProductionCalendarWhereUniqueInput[]
    update?: ProductionCalendarUpdateWithWhereUniqueWithoutOrdersInput | ProductionCalendarUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: ProductionCalendarUpdateManyWithWhereWithoutOrdersInput | ProductionCalendarUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: ProductionCalendarScalarWhereInput | ProductionCalendarScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutRepairOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutRepairOrderInput, PaymentUncheckedCreateWithoutRepairOrderInput> | PaymentCreateWithoutRepairOrderInput[] | PaymentUncheckedCreateWithoutRepairOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutRepairOrderInput | PaymentCreateOrConnectWithoutRepairOrderInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutRepairOrderInput | PaymentUpsertWithWhereUniqueWithoutRepairOrderInput[]
    createMany?: PaymentCreateManyRepairOrderInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutRepairOrderInput | PaymentUpdateWithWhereUniqueWithoutRepairOrderInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutRepairOrderInput | PaymentUpdateManyWithWhereWithoutRepairOrderInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ProductionCalendarUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<ProductionCalendarCreateWithoutOrdersInput, ProductionCalendarUncheckedCreateWithoutOrdersInput> | ProductionCalendarCreateWithoutOrdersInput[] | ProductionCalendarUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: ProductionCalendarCreateOrConnectWithoutOrdersInput | ProductionCalendarCreateOrConnectWithoutOrdersInput[]
    upsert?: ProductionCalendarUpsertWithWhereUniqueWithoutOrdersInput | ProductionCalendarUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: ProductionCalendarCreateManyOrdersInputEnvelope
    set?: ProductionCalendarWhereUniqueInput | ProductionCalendarWhereUniqueInput[]
    disconnect?: ProductionCalendarWhereUniqueInput | ProductionCalendarWhereUniqueInput[]
    delete?: ProductionCalendarWhereUniqueInput | ProductionCalendarWhereUniqueInput[]
    connect?: ProductionCalendarWhereUniqueInput | ProductionCalendarWhereUniqueInput[]
    update?: ProductionCalendarUpdateWithWhereUniqueWithoutOrdersInput | ProductionCalendarUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: ProductionCalendarUpdateManyWithWhereWithoutOrdersInput | ProductionCalendarUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: ProductionCalendarScalarWhereInput | ProductionCalendarScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutRepairOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutRepairOrderInput, PaymentUncheckedCreateWithoutRepairOrderInput> | PaymentCreateWithoutRepairOrderInput[] | PaymentUncheckedCreateWithoutRepairOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutRepairOrderInput | PaymentCreateOrConnectWithoutRepairOrderInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutRepairOrderInput | PaymentUpsertWithWhereUniqueWithoutRepairOrderInput[]
    createMany?: PaymentCreateManyRepairOrderInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutRepairOrderInput | PaymentUpdateWithWhereUniqueWithoutRepairOrderInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutRepairOrderInput | PaymentUpdateManyWithWhereWithoutRepairOrderInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type RepairOrderCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<RepairOrderCreateWithoutPaymentsInput, RepairOrderUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: RepairOrderCreateOrConnectWithoutPaymentsInput
    connect?: RepairOrderWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type RepairOrderUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<RepairOrderCreateWithoutPaymentsInput, RepairOrderUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: RepairOrderCreateOrConnectWithoutPaymentsInput
    upsert?: RepairOrderUpsertWithoutPaymentsInput
    connect?: RepairOrderWhereUniqueInput
    update?: XOR<XOR<RepairOrderUpdateToOneWithWhereWithoutPaymentsInput, RepairOrderUpdateWithoutPaymentsInput>, RepairOrderUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
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

  export type RegionCreateWithoutUsersInput = {
    name: string
    region: string
    district: string
  }

  export type RegionUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    region: string
    district: string
  }

  export type RegionCreateOrConnectWithoutUsersInput = {
    where: RegionWhereUniqueInput
    create: XOR<RegionCreateWithoutUsersInput, RegionUncheckedCreateWithoutUsersInput>
  }

  export type CarCreateWithoutUserInput = {
    brandId: number
    model: string
    year: number
    vin: string
    engineType: string
    registrationNumber: string
    pts: string
    sts: string
    status: string
    repairOrders?: RepairOrderCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutUserInput = {
    id?: number
    brandId: number
    model: string
    year: number
    vin: string
    engineType: string
    registrationNumber: string
    pts: string
    sts: string
    status: string
    repairOrders?: RepairOrderUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutUserInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutUserInput, CarUncheckedCreateWithoutUserInput>
  }

  export type CarCreateManyUserInputEnvelope = {
    data: CarCreateManyUserInput | CarCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RepairOrderCreateWithoutUserInput = {
    status: string
    materials: string
    createdAt?: Date | string
    createdBy: number
    modifiedBy: number
    car: CarCreateNestedOneWithoutRepairOrdersInput
    employee: UserCreateNestedOneWithoutOrdersEmployeeInput
    calendar?: ProductionCalendarCreateNestedManyWithoutOrdersInput
    payments?: PaymentCreateNestedManyWithoutRepairOrderInput
  }

  export type RepairOrderUncheckedCreateWithoutUserInput = {
    id?: number
    carId: number
    employeeId: number
    status: string
    materials: string
    createdAt?: Date | string
    createdBy: number
    modifiedBy: number
    calendar?: ProductionCalendarUncheckedCreateNestedManyWithoutOrdersInput
    payments?: PaymentUncheckedCreateNestedManyWithoutRepairOrderInput
  }

  export type RepairOrderCreateOrConnectWithoutUserInput = {
    where: RepairOrderWhereUniqueInput
    create: XOR<RepairOrderCreateWithoutUserInput, RepairOrderUncheckedCreateWithoutUserInput>
  }

  export type RepairOrderCreateManyUserInputEnvelope = {
    data: RepairOrderCreateManyUserInput | RepairOrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RepairOrderCreateWithoutEmployeeInput = {
    status: string
    materials: string
    createdAt?: Date | string
    createdBy: number
    modifiedBy: number
    car: CarCreateNestedOneWithoutRepairOrdersInput
    user: UserCreateNestedOneWithoutOrdersUserInput
    calendar?: ProductionCalendarCreateNestedManyWithoutOrdersInput
    payments?: PaymentCreateNestedManyWithoutRepairOrderInput
  }

  export type RepairOrderUncheckedCreateWithoutEmployeeInput = {
    id?: number
    carId: number
    userId: number
    status: string
    materials: string
    createdAt?: Date | string
    createdBy: number
    modifiedBy: number
    calendar?: ProductionCalendarUncheckedCreateNestedManyWithoutOrdersInput
    payments?: PaymentUncheckedCreateNestedManyWithoutRepairOrderInput
  }

  export type RepairOrderCreateOrConnectWithoutEmployeeInput = {
    where: RepairOrderWhereUniqueInput
    create: XOR<RepairOrderCreateWithoutEmployeeInput, RepairOrderUncheckedCreateWithoutEmployeeInput>
  }

  export type RepairOrderCreateManyEmployeeInputEnvelope = {
    data: RepairOrderCreateManyEmployeeInput | RepairOrderCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeCreateWithoutUserInput = {
    position: string
    salary?: Decimal | DecimalJsLike | number | string | null
    hiredDate?: Date | string | null
    created: Date | string
    createdBy: number
    modified?: Date | string | null
    modifiedBy?: number | null
    workSchedules?: WorkScheduleCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutUserInput = {
    id?: number
    position: string
    salary?: Decimal | DecimalJsLike | number | string | null
    hiredDate?: Date | string | null
    created: Date | string
    createdBy: number
    modified?: Date | string | null
    modifiedBy?: number | null
    workSchedules?: WorkScheduleUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutUserInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
  }

  export type UserRoleCreateWithoutUserInput = {
    role: RoleCreateNestedOneWithoutUserRolesInput
  }

  export type UserRoleUncheckedCreateWithoutUserInput = {
    roleId: number
  }

  export type UserRoleCreateOrConnectWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleCreateManyUserInputEnvelope = {
    data: UserRoleCreateManyUserInput | UserRoleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutUserInput = {
    amount: Decimal | DecimalJsLike | number | string
    paymentDate?: Date | string
    paymentMethod: string
    repairOrder: RepairOrderCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: number
    repairOrderId: number
    amount: Decimal | DecimalJsLike | number | string
    paymentDate?: Date | string
    paymentMethod: string
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RegionUpsertWithoutUsersInput = {
    update: XOR<RegionUpdateWithoutUsersInput, RegionUncheckedUpdateWithoutUsersInput>
    create: XOR<RegionCreateWithoutUsersInput, RegionUncheckedCreateWithoutUsersInput>
    where?: RegionWhereInput
  }

  export type RegionUpdateToOneWithWhereWithoutUsersInput = {
    where?: RegionWhereInput
    data: XOR<RegionUpdateWithoutUsersInput, RegionUncheckedUpdateWithoutUsersInput>
  }

  export type RegionUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
  }

  export type RegionUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
  }

  export type CarUpsertWithWhereUniqueWithoutUserInput = {
    where: CarWhereUniqueInput
    update: XOR<CarUpdateWithoutUserInput, CarUncheckedUpdateWithoutUserInput>
    create: XOR<CarCreateWithoutUserInput, CarUncheckedCreateWithoutUserInput>
  }

  export type CarUpdateWithWhereUniqueWithoutUserInput = {
    where: CarWhereUniqueInput
    data: XOR<CarUpdateWithoutUserInput, CarUncheckedUpdateWithoutUserInput>
  }

  export type CarUpdateManyWithWhereWithoutUserInput = {
    where: CarScalarWhereInput
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyWithoutUserInput>
  }

  export type CarScalarWhereInput = {
    AND?: CarScalarWhereInput | CarScalarWhereInput[]
    OR?: CarScalarWhereInput[]
    NOT?: CarScalarWhereInput | CarScalarWhereInput[]
    id?: IntFilter<"Car"> | number
    userId?: IntFilter<"Car"> | number
    brandId?: IntFilter<"Car"> | number
    model?: StringFilter<"Car"> | string
    year?: IntFilter<"Car"> | number
    vin?: StringFilter<"Car"> | string
    engineType?: StringFilter<"Car"> | string
    registrationNumber?: StringFilter<"Car"> | string
    pts?: StringFilter<"Car"> | string
    sts?: StringFilter<"Car"> | string
    status?: StringFilter<"Car"> | string
  }

  export type RepairOrderUpsertWithWhereUniqueWithoutUserInput = {
    where: RepairOrderWhereUniqueInput
    update: XOR<RepairOrderUpdateWithoutUserInput, RepairOrderUncheckedUpdateWithoutUserInput>
    create: XOR<RepairOrderCreateWithoutUserInput, RepairOrderUncheckedCreateWithoutUserInput>
  }

  export type RepairOrderUpdateWithWhereUniqueWithoutUserInput = {
    where: RepairOrderWhereUniqueInput
    data: XOR<RepairOrderUpdateWithoutUserInput, RepairOrderUncheckedUpdateWithoutUserInput>
  }

  export type RepairOrderUpdateManyWithWhereWithoutUserInput = {
    where: RepairOrderScalarWhereInput
    data: XOR<RepairOrderUpdateManyMutationInput, RepairOrderUncheckedUpdateManyWithoutUserInput>
  }

  export type RepairOrderScalarWhereInput = {
    AND?: RepairOrderScalarWhereInput | RepairOrderScalarWhereInput[]
    OR?: RepairOrderScalarWhereInput[]
    NOT?: RepairOrderScalarWhereInput | RepairOrderScalarWhereInput[]
    id?: IntFilter<"RepairOrder"> | number
    carId?: IntFilter<"RepairOrder"> | number
    userId?: IntFilter<"RepairOrder"> | number
    employeeId?: IntFilter<"RepairOrder"> | number
    status?: StringFilter<"RepairOrder"> | string
    materials?: StringFilter<"RepairOrder"> | string
    createdAt?: DateTimeFilter<"RepairOrder"> | Date | string
    createdBy?: IntFilter<"RepairOrder"> | number
    modifiedBy?: IntFilter<"RepairOrder"> | number
  }

  export type RepairOrderUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: RepairOrderWhereUniqueInput
    update: XOR<RepairOrderUpdateWithoutEmployeeInput, RepairOrderUncheckedUpdateWithoutEmployeeInput>
    create: XOR<RepairOrderCreateWithoutEmployeeInput, RepairOrderUncheckedCreateWithoutEmployeeInput>
  }

  export type RepairOrderUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: RepairOrderWhereUniqueInput
    data: XOR<RepairOrderUpdateWithoutEmployeeInput, RepairOrderUncheckedUpdateWithoutEmployeeInput>
  }

  export type RepairOrderUpdateManyWithWhereWithoutEmployeeInput = {
    where: RepairOrderScalarWhereInput
    data: XOR<RepairOrderUpdateManyMutationInput, RepairOrderUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type EmployeeUpsertWithoutUserInput = {
    update: XOR<EmployeeUpdateWithoutUserInput, EmployeeUncheckedUpdateWithoutUserInput>
    create: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutUserInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutUserInput, EmployeeUncheckedUpdateWithoutUserInput>
  }

  export type EmployeeUpdateWithoutUserInput = {
    position?: StringFieldUpdateOperationsInput | string
    salary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    workSchedules?: WorkScheduleUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    salary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    workSchedules?: WorkScheduleUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type UserRoleUpsertWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutUserInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutUserInput>
  }

  export type UserRoleScalarWhereInput = {
    AND?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    OR?: UserRoleScalarWhereInput[]
    NOT?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    userId?: IntFilter<"UserRole"> | number
    roleId?: IntFilter<"UserRole"> | number
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: IntFilter<"Payment"> | number
    repairOrderId?: IntFilter<"Payment"> | number
    userId?: IntFilter<"Payment"> | number
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    paymentMethod?: StringFilter<"Payment"> | string
  }

  export type UserRoleCreateWithoutRoleInput = {
    user: UserCreateNestedOneWithoutUserRolesInput
  }

  export type UserRoleUncheckedCreateWithoutRoleInput = {
    userId: number
  }

  export type UserRoleCreateOrConnectWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleCreateManyRoleInputEnvelope = {
    data: UserRoleCreateManyRoleInput | UserRoleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutRoleInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserCreateWithoutUserRolesInput = {
    name: string
    email: string
    phone: string
    avatar?: string | null
    created: Date | string
    createdBy: number
    modified?: Date | string | null
    modifiedBy?: number | null
    region: RegionCreateNestedOneWithoutUsersInput
    cars?: CarCreateNestedManyWithoutUserInput
    ordersUser?: RepairOrderCreateNestedManyWithoutUserInput
    ordersEmployee?: RepairOrderCreateNestedManyWithoutEmployeeInput
    employee?: EmployeeCreateNestedOneWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserRolesInput = {
    id?: number
    name: string
    email: string
    phone: string
    avatar?: string | null
    regionId: number
    created: Date | string
    createdBy: number
    modified?: Date | string | null
    modifiedBy?: number | null
    cars?: CarUncheckedCreateNestedManyWithoutUserInput
    ordersUser?: RepairOrderUncheckedCreateNestedManyWithoutUserInput
    ordersEmployee?: RepairOrderUncheckedCreateNestedManyWithoutEmployeeInput
    employee?: EmployeeUncheckedCreateNestedOneWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserRolesInput, UserUncheckedCreateWithoutUserRolesInput>
  }

  export type RoleCreateWithoutUserRolesInput = {
    name: string
  }

  export type RoleUncheckedCreateWithoutUserRolesInput = {
    id?: number
    name: string
  }

  export type RoleCreateOrConnectWithoutUserRolesInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUserRolesInput, RoleUncheckedCreateWithoutUserRolesInput>
  }

  export type UserUpsertWithoutUserRolesInput = {
    update: XOR<UserUpdateWithoutUserRolesInput, UserUncheckedUpdateWithoutUserRolesInput>
    create: XOR<UserCreateWithoutUserRolesInput, UserUncheckedCreateWithoutUserRolesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserRolesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserRolesInput, UserUncheckedUpdateWithoutUserRolesInput>
  }

  export type UserUpdateWithoutUserRolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    region?: RegionUpdateOneRequiredWithoutUsersNestedInput
    cars?: CarUpdateManyWithoutUserNestedInput
    ordersUser?: RepairOrderUpdateManyWithoutUserNestedInput
    ordersEmployee?: RepairOrderUpdateManyWithoutEmployeeNestedInput
    employee?: EmployeeUpdateOneWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    regionId?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    cars?: CarUncheckedUpdateManyWithoutUserNestedInput
    ordersUser?: RepairOrderUncheckedUpdateManyWithoutUserNestedInput
    ordersEmployee?: RepairOrderUncheckedUpdateManyWithoutEmployeeNestedInput
    employee?: EmployeeUncheckedUpdateOneWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoleUpsertWithoutUserRolesInput = {
    update: XOR<RoleUpdateWithoutUserRolesInput, RoleUncheckedUpdateWithoutUserRolesInput>
    create: XOR<RoleCreateWithoutUserRolesInput, RoleUncheckedCreateWithoutUserRolesInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUserRolesInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUserRolesInput, RoleUncheckedUpdateWithoutUserRolesInput>
  }

  export type RoleUpdateWithoutUserRolesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateWithoutUserRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutRegionInput = {
    name: string
    email: string
    phone: string
    avatar?: string | null
    created: Date | string
    createdBy: number
    modified?: Date | string | null
    modifiedBy?: number | null
    cars?: CarCreateNestedManyWithoutUserInput
    ordersUser?: RepairOrderCreateNestedManyWithoutUserInput
    ordersEmployee?: RepairOrderCreateNestedManyWithoutEmployeeInput
    employee?: EmployeeCreateNestedOneWithoutUserInput
    userRoles?: UserRoleCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRegionInput = {
    id?: number
    name: string
    email: string
    phone: string
    avatar?: string | null
    created: Date | string
    createdBy: number
    modified?: Date | string | null
    modifiedBy?: number | null
    cars?: CarUncheckedCreateNestedManyWithoutUserInput
    ordersUser?: RepairOrderUncheckedCreateNestedManyWithoutUserInput
    ordersEmployee?: RepairOrderUncheckedCreateNestedManyWithoutEmployeeInput
    employee?: EmployeeUncheckedCreateNestedOneWithoutUserInput
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRegionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRegionInput, UserUncheckedCreateWithoutRegionInput>
  }

  export type UserCreateManyRegionInputEnvelope = {
    data: UserCreateManyRegionInput | UserCreateManyRegionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRegionInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRegionInput, UserUncheckedUpdateWithoutRegionInput>
    create: XOR<UserCreateWithoutRegionInput, UserUncheckedCreateWithoutRegionInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRegionInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRegionInput, UserUncheckedUpdateWithoutRegionInput>
  }

  export type UserUpdateManyWithWhereWithoutRegionInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRegionInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    regionId?: IntFilter<"User"> | number
    created?: DateTimeFilter<"User"> | Date | string
    createdBy?: IntFilter<"User"> | number
    modified?: DateTimeNullableFilter<"User"> | Date | string | null
    modifiedBy?: IntNullableFilter<"User"> | number | null
  }

  export type UserCreateWithoutEmployeeInput = {
    name: string
    email: string
    phone: string
    avatar?: string | null
    created: Date | string
    createdBy: number
    modified?: Date | string | null
    modifiedBy?: number | null
    region: RegionCreateNestedOneWithoutUsersInput
    cars?: CarCreateNestedManyWithoutUserInput
    ordersUser?: RepairOrderCreateNestedManyWithoutUserInput
    ordersEmployee?: RepairOrderCreateNestedManyWithoutEmployeeInput
    userRoles?: UserRoleCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmployeeInput = {
    id?: number
    name: string
    email: string
    phone: string
    avatar?: string | null
    regionId: number
    created: Date | string
    createdBy: number
    modified?: Date | string | null
    modifiedBy?: number | null
    cars?: CarUncheckedCreateNestedManyWithoutUserInput
    ordersUser?: RepairOrderUncheckedCreateNestedManyWithoutUserInput
    ordersEmployee?: RepairOrderUncheckedCreateNestedManyWithoutEmployeeInput
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmployeeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
  }

  export type WorkScheduleCreateWithoutEmployeeInput = {
    workDate: Date | string
    startTime: Date | string
    endTime: Date | string
    status: string
    calendar?: ProductionCalendarCreateNestedManyWithoutWorkScheduleInput
  }

  export type WorkScheduleUncheckedCreateWithoutEmployeeInput = {
    id?: number
    workDate: Date | string
    startTime: Date | string
    endTime: Date | string
    status: string
    calendar?: ProductionCalendarUncheckedCreateNestedManyWithoutWorkScheduleInput
  }

  export type WorkScheduleCreateOrConnectWithoutEmployeeInput = {
    where: WorkScheduleWhereUniqueInput
    create: XOR<WorkScheduleCreateWithoutEmployeeInput, WorkScheduleUncheckedCreateWithoutEmployeeInput>
  }

  export type WorkScheduleCreateManyEmployeeInputEnvelope = {
    data: WorkScheduleCreateManyEmployeeInput | WorkScheduleCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEmployeeInput = {
    update: XOR<UserUpdateWithoutEmployeeInput, UserUncheckedUpdateWithoutEmployeeInput>
    create: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmployeeInput, UserUncheckedUpdateWithoutEmployeeInput>
  }

  export type UserUpdateWithoutEmployeeInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    region?: RegionUpdateOneRequiredWithoutUsersNestedInput
    cars?: CarUpdateManyWithoutUserNestedInput
    ordersUser?: RepairOrderUpdateManyWithoutUserNestedInput
    ordersEmployee?: RepairOrderUpdateManyWithoutEmployeeNestedInput
    userRoles?: UserRoleUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    regionId?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    cars?: CarUncheckedUpdateManyWithoutUserNestedInput
    ordersUser?: RepairOrderUncheckedUpdateManyWithoutUserNestedInput
    ordersEmployee?: RepairOrderUncheckedUpdateManyWithoutEmployeeNestedInput
    userRoles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkScheduleUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: WorkScheduleWhereUniqueInput
    update: XOR<WorkScheduleUpdateWithoutEmployeeInput, WorkScheduleUncheckedUpdateWithoutEmployeeInput>
    create: XOR<WorkScheduleCreateWithoutEmployeeInput, WorkScheduleUncheckedCreateWithoutEmployeeInput>
  }

  export type WorkScheduleUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: WorkScheduleWhereUniqueInput
    data: XOR<WorkScheduleUpdateWithoutEmployeeInput, WorkScheduleUncheckedUpdateWithoutEmployeeInput>
  }

  export type WorkScheduleUpdateManyWithWhereWithoutEmployeeInput = {
    where: WorkScheduleScalarWhereInput
    data: XOR<WorkScheduleUpdateManyMutationInput, WorkScheduleUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type WorkScheduleScalarWhereInput = {
    AND?: WorkScheduleScalarWhereInput | WorkScheduleScalarWhereInput[]
    OR?: WorkScheduleScalarWhereInput[]
    NOT?: WorkScheduleScalarWhereInput | WorkScheduleScalarWhereInput[]
    id?: IntFilter<"WorkSchedule"> | number
    employeeId?: IntFilter<"WorkSchedule"> | number
    workDate?: DateTimeFilter<"WorkSchedule"> | Date | string
    startTime?: DateTimeFilter<"WorkSchedule"> | Date | string
    endTime?: DateTimeFilter<"WorkSchedule"> | Date | string
    status?: StringFilter<"WorkSchedule"> | string
  }

  export type EmployeeCreateWithoutWorkSchedulesInput = {
    position: string
    salary?: Decimal | DecimalJsLike | number | string | null
    hiredDate?: Date | string | null
    created: Date | string
    createdBy: number
    modified?: Date | string | null
    modifiedBy?: number | null
    user: UserCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutWorkSchedulesInput = {
    id?: number
    userId: number
    position: string
    salary?: Decimal | DecimalJsLike | number | string | null
    hiredDate?: Date | string | null
    created: Date | string
    createdBy: number
    modified?: Date | string | null
    modifiedBy?: number | null
  }

  export type EmployeeCreateOrConnectWithoutWorkSchedulesInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutWorkSchedulesInput, EmployeeUncheckedCreateWithoutWorkSchedulesInput>
  }

  export type ProductionCalendarCreateWithoutWorkScheduleInput = {
    workDate: Date | string
    isHoliday: boolean
    orders?: RepairOrderCreateNestedOneWithoutCalendarInput
  }

  export type ProductionCalendarUncheckedCreateWithoutWorkScheduleInput = {
    id?: number
    ordersId?: number | null
    workDate: Date | string
    isHoliday: boolean
  }

  export type ProductionCalendarCreateOrConnectWithoutWorkScheduleInput = {
    where: ProductionCalendarWhereUniqueInput
    create: XOR<ProductionCalendarCreateWithoutWorkScheduleInput, ProductionCalendarUncheckedCreateWithoutWorkScheduleInput>
  }

  export type ProductionCalendarCreateManyWorkScheduleInputEnvelope = {
    data: ProductionCalendarCreateManyWorkScheduleInput | ProductionCalendarCreateManyWorkScheduleInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithoutWorkSchedulesInput = {
    update: XOR<EmployeeUpdateWithoutWorkSchedulesInput, EmployeeUncheckedUpdateWithoutWorkSchedulesInput>
    create: XOR<EmployeeCreateWithoutWorkSchedulesInput, EmployeeUncheckedCreateWithoutWorkSchedulesInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutWorkSchedulesInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutWorkSchedulesInput, EmployeeUncheckedUpdateWithoutWorkSchedulesInput>
  }

  export type EmployeeUpdateWithoutWorkSchedulesInput = {
    position?: StringFieldUpdateOperationsInput | string
    salary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutWorkSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    salary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductionCalendarUpsertWithWhereUniqueWithoutWorkScheduleInput = {
    where: ProductionCalendarWhereUniqueInput
    update: XOR<ProductionCalendarUpdateWithoutWorkScheduleInput, ProductionCalendarUncheckedUpdateWithoutWorkScheduleInput>
    create: XOR<ProductionCalendarCreateWithoutWorkScheduleInput, ProductionCalendarUncheckedCreateWithoutWorkScheduleInput>
  }

  export type ProductionCalendarUpdateWithWhereUniqueWithoutWorkScheduleInput = {
    where: ProductionCalendarWhereUniqueInput
    data: XOR<ProductionCalendarUpdateWithoutWorkScheduleInput, ProductionCalendarUncheckedUpdateWithoutWorkScheduleInput>
  }

  export type ProductionCalendarUpdateManyWithWhereWithoutWorkScheduleInput = {
    where: ProductionCalendarScalarWhereInput
    data: XOR<ProductionCalendarUpdateManyMutationInput, ProductionCalendarUncheckedUpdateManyWithoutWorkScheduleInput>
  }

  export type ProductionCalendarScalarWhereInput = {
    AND?: ProductionCalendarScalarWhereInput | ProductionCalendarScalarWhereInput[]
    OR?: ProductionCalendarScalarWhereInput[]
    NOT?: ProductionCalendarScalarWhereInput | ProductionCalendarScalarWhereInput[]
    id?: IntFilter<"ProductionCalendar"> | number
    workScheduleId?: IntFilter<"ProductionCalendar"> | number
    ordersId?: IntNullableFilter<"ProductionCalendar"> | number | null
    workDate?: DateTimeFilter<"ProductionCalendar"> | Date | string
    isHoliday?: BoolFilter<"ProductionCalendar"> | boolean
  }

  export type WorkScheduleCreateWithoutCalendarInput = {
    workDate: Date | string
    startTime: Date | string
    endTime: Date | string
    status: string
    employee: EmployeeCreateNestedOneWithoutWorkSchedulesInput
  }

  export type WorkScheduleUncheckedCreateWithoutCalendarInput = {
    id?: number
    employeeId: number
    workDate: Date | string
    startTime: Date | string
    endTime: Date | string
    status: string
  }

  export type WorkScheduleCreateOrConnectWithoutCalendarInput = {
    where: WorkScheduleWhereUniqueInput
    create: XOR<WorkScheduleCreateWithoutCalendarInput, WorkScheduleUncheckedCreateWithoutCalendarInput>
  }

  export type RepairOrderCreateWithoutCalendarInput = {
    status: string
    materials: string
    createdAt?: Date | string
    createdBy: number
    modifiedBy: number
    car: CarCreateNestedOneWithoutRepairOrdersInput
    user: UserCreateNestedOneWithoutOrdersUserInput
    employee: UserCreateNestedOneWithoutOrdersEmployeeInput
    payments?: PaymentCreateNestedManyWithoutRepairOrderInput
  }

  export type RepairOrderUncheckedCreateWithoutCalendarInput = {
    id?: number
    carId: number
    userId: number
    employeeId: number
    status: string
    materials: string
    createdAt?: Date | string
    createdBy: number
    modifiedBy: number
    payments?: PaymentUncheckedCreateNestedManyWithoutRepairOrderInput
  }

  export type RepairOrderCreateOrConnectWithoutCalendarInput = {
    where: RepairOrderWhereUniqueInput
    create: XOR<RepairOrderCreateWithoutCalendarInput, RepairOrderUncheckedCreateWithoutCalendarInput>
  }

  export type WorkScheduleUpsertWithoutCalendarInput = {
    update: XOR<WorkScheduleUpdateWithoutCalendarInput, WorkScheduleUncheckedUpdateWithoutCalendarInput>
    create: XOR<WorkScheduleCreateWithoutCalendarInput, WorkScheduleUncheckedCreateWithoutCalendarInput>
    where?: WorkScheduleWhereInput
  }

  export type WorkScheduleUpdateToOneWithWhereWithoutCalendarInput = {
    where?: WorkScheduleWhereInput
    data: XOR<WorkScheduleUpdateWithoutCalendarInput, WorkScheduleUncheckedUpdateWithoutCalendarInput>
  }

  export type WorkScheduleUpdateWithoutCalendarInput = {
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    employee?: EmployeeUpdateOneRequiredWithoutWorkSchedulesNestedInput
  }

  export type WorkScheduleUncheckedUpdateWithoutCalendarInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type RepairOrderUpsertWithoutCalendarInput = {
    update: XOR<RepairOrderUpdateWithoutCalendarInput, RepairOrderUncheckedUpdateWithoutCalendarInput>
    create: XOR<RepairOrderCreateWithoutCalendarInput, RepairOrderUncheckedCreateWithoutCalendarInput>
    where?: RepairOrderWhereInput
  }

  export type RepairOrderUpdateToOneWithWhereWithoutCalendarInput = {
    where?: RepairOrderWhereInput
    data: XOR<RepairOrderUpdateWithoutCalendarInput, RepairOrderUncheckedUpdateWithoutCalendarInput>
  }

  export type RepairOrderUpdateWithoutCalendarInput = {
    status?: StringFieldUpdateOperationsInput | string
    materials?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modifiedBy?: IntFieldUpdateOperationsInput | number
    car?: CarUpdateOneRequiredWithoutRepairOrdersNestedInput
    user?: UserUpdateOneRequiredWithoutOrdersUserNestedInput
    employee?: UserUpdateOneRequiredWithoutOrdersEmployeeNestedInput
    payments?: PaymentUpdateManyWithoutRepairOrderNestedInput
  }

  export type RepairOrderUncheckedUpdateWithoutCalendarInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    materials?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modifiedBy?: IntFieldUpdateOperationsInput | number
    payments?: PaymentUncheckedUpdateManyWithoutRepairOrderNestedInput
  }

  export type UserCreateWithoutCarsInput = {
    name: string
    email: string
    phone: string
    avatar?: string | null
    created: Date | string
    createdBy: number
    modified?: Date | string | null
    modifiedBy?: number | null
    region: RegionCreateNestedOneWithoutUsersInput
    ordersUser?: RepairOrderCreateNestedManyWithoutUserInput
    ordersEmployee?: RepairOrderCreateNestedManyWithoutEmployeeInput
    employee?: EmployeeCreateNestedOneWithoutUserInput
    userRoles?: UserRoleCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCarsInput = {
    id?: number
    name: string
    email: string
    phone: string
    avatar?: string | null
    regionId: number
    created: Date | string
    createdBy: number
    modified?: Date | string | null
    modifiedBy?: number | null
    ordersUser?: RepairOrderUncheckedCreateNestedManyWithoutUserInput
    ordersEmployee?: RepairOrderUncheckedCreateNestedManyWithoutEmployeeInput
    employee?: EmployeeUncheckedCreateNestedOneWithoutUserInput
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCarsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCarsInput, UserUncheckedCreateWithoutCarsInput>
  }

  export type RepairOrderCreateWithoutCarInput = {
    status: string
    materials: string
    createdAt?: Date | string
    createdBy: number
    modifiedBy: number
    user: UserCreateNestedOneWithoutOrdersUserInput
    employee: UserCreateNestedOneWithoutOrdersEmployeeInput
    calendar?: ProductionCalendarCreateNestedManyWithoutOrdersInput
    payments?: PaymentCreateNestedManyWithoutRepairOrderInput
  }

  export type RepairOrderUncheckedCreateWithoutCarInput = {
    id?: number
    userId: number
    employeeId: number
    status: string
    materials: string
    createdAt?: Date | string
    createdBy: number
    modifiedBy: number
    calendar?: ProductionCalendarUncheckedCreateNestedManyWithoutOrdersInput
    payments?: PaymentUncheckedCreateNestedManyWithoutRepairOrderInput
  }

  export type RepairOrderCreateOrConnectWithoutCarInput = {
    where: RepairOrderWhereUniqueInput
    create: XOR<RepairOrderCreateWithoutCarInput, RepairOrderUncheckedCreateWithoutCarInput>
  }

  export type RepairOrderCreateManyCarInputEnvelope = {
    data: RepairOrderCreateManyCarInput | RepairOrderCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCarsInput = {
    update: XOR<UserUpdateWithoutCarsInput, UserUncheckedUpdateWithoutCarsInput>
    create: XOR<UserCreateWithoutCarsInput, UserUncheckedCreateWithoutCarsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCarsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCarsInput, UserUncheckedUpdateWithoutCarsInput>
  }

  export type UserUpdateWithoutCarsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    region?: RegionUpdateOneRequiredWithoutUsersNestedInput
    ordersUser?: RepairOrderUpdateManyWithoutUserNestedInput
    ordersEmployee?: RepairOrderUpdateManyWithoutEmployeeNestedInput
    employee?: EmployeeUpdateOneWithoutUserNestedInput
    userRoles?: UserRoleUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    regionId?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    ordersUser?: RepairOrderUncheckedUpdateManyWithoutUserNestedInput
    ordersEmployee?: RepairOrderUncheckedUpdateManyWithoutEmployeeNestedInput
    employee?: EmployeeUncheckedUpdateOneWithoutUserNestedInput
    userRoles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RepairOrderUpsertWithWhereUniqueWithoutCarInput = {
    where: RepairOrderWhereUniqueInput
    update: XOR<RepairOrderUpdateWithoutCarInput, RepairOrderUncheckedUpdateWithoutCarInput>
    create: XOR<RepairOrderCreateWithoutCarInput, RepairOrderUncheckedCreateWithoutCarInput>
  }

  export type RepairOrderUpdateWithWhereUniqueWithoutCarInput = {
    where: RepairOrderWhereUniqueInput
    data: XOR<RepairOrderUpdateWithoutCarInput, RepairOrderUncheckedUpdateWithoutCarInput>
  }

  export type RepairOrderUpdateManyWithWhereWithoutCarInput = {
    where: RepairOrderScalarWhereInput
    data: XOR<RepairOrderUpdateManyMutationInput, RepairOrderUncheckedUpdateManyWithoutCarInput>
  }

  export type CarCreateWithoutRepairOrdersInput = {
    brandId: number
    model: string
    year: number
    vin: string
    engineType: string
    registrationNumber: string
    pts: string
    sts: string
    status: string
    user: UserCreateNestedOneWithoutCarsInput
  }

  export type CarUncheckedCreateWithoutRepairOrdersInput = {
    id?: number
    userId: number
    brandId: number
    model: string
    year: number
    vin: string
    engineType: string
    registrationNumber: string
    pts: string
    sts: string
    status: string
  }

  export type CarCreateOrConnectWithoutRepairOrdersInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutRepairOrdersInput, CarUncheckedCreateWithoutRepairOrdersInput>
  }

  export type UserCreateWithoutOrdersUserInput = {
    name: string
    email: string
    phone: string
    avatar?: string | null
    created: Date | string
    createdBy: number
    modified?: Date | string | null
    modifiedBy?: number | null
    region: RegionCreateNestedOneWithoutUsersInput
    cars?: CarCreateNestedManyWithoutUserInput
    ordersEmployee?: RepairOrderCreateNestedManyWithoutEmployeeInput
    employee?: EmployeeCreateNestedOneWithoutUserInput
    userRoles?: UserRoleCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersUserInput = {
    id?: number
    name: string
    email: string
    phone: string
    avatar?: string | null
    regionId: number
    created: Date | string
    createdBy: number
    modified?: Date | string | null
    modifiedBy?: number | null
    cars?: CarUncheckedCreateNestedManyWithoutUserInput
    ordersEmployee?: RepairOrderUncheckedCreateNestedManyWithoutEmployeeInput
    employee?: EmployeeUncheckedCreateNestedOneWithoutUserInput
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersUserInput, UserUncheckedCreateWithoutOrdersUserInput>
  }

  export type UserCreateWithoutOrdersEmployeeInput = {
    name: string
    email: string
    phone: string
    avatar?: string | null
    created: Date | string
    createdBy: number
    modified?: Date | string | null
    modifiedBy?: number | null
    region: RegionCreateNestedOneWithoutUsersInput
    cars?: CarCreateNestedManyWithoutUserInput
    ordersUser?: RepairOrderCreateNestedManyWithoutUserInput
    employee?: EmployeeCreateNestedOneWithoutUserInput
    userRoles?: UserRoleCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersEmployeeInput = {
    id?: number
    name: string
    email: string
    phone: string
    avatar?: string | null
    regionId: number
    created: Date | string
    createdBy: number
    modified?: Date | string | null
    modifiedBy?: number | null
    cars?: CarUncheckedCreateNestedManyWithoutUserInput
    ordersUser?: RepairOrderUncheckedCreateNestedManyWithoutUserInput
    employee?: EmployeeUncheckedCreateNestedOneWithoutUserInput
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersEmployeeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersEmployeeInput, UserUncheckedCreateWithoutOrdersEmployeeInput>
  }

  export type ProductionCalendarCreateWithoutOrdersInput = {
    workDate: Date | string
    isHoliday: boolean
    workSchedule: WorkScheduleCreateNestedOneWithoutCalendarInput
  }

  export type ProductionCalendarUncheckedCreateWithoutOrdersInput = {
    id?: number
    workScheduleId: number
    workDate: Date | string
    isHoliday: boolean
  }

  export type ProductionCalendarCreateOrConnectWithoutOrdersInput = {
    where: ProductionCalendarWhereUniqueInput
    create: XOR<ProductionCalendarCreateWithoutOrdersInput, ProductionCalendarUncheckedCreateWithoutOrdersInput>
  }

  export type ProductionCalendarCreateManyOrdersInputEnvelope = {
    data: ProductionCalendarCreateManyOrdersInput | ProductionCalendarCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutRepairOrderInput = {
    amount: Decimal | DecimalJsLike | number | string
    paymentDate?: Date | string
    paymentMethod: string
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutRepairOrderInput = {
    id?: number
    userId: number
    amount: Decimal | DecimalJsLike | number | string
    paymentDate?: Date | string
    paymentMethod: string
  }

  export type PaymentCreateOrConnectWithoutRepairOrderInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutRepairOrderInput, PaymentUncheckedCreateWithoutRepairOrderInput>
  }

  export type PaymentCreateManyRepairOrderInputEnvelope = {
    data: PaymentCreateManyRepairOrderInput | PaymentCreateManyRepairOrderInput[]
    skipDuplicates?: boolean
  }

  export type CarUpsertWithoutRepairOrdersInput = {
    update: XOR<CarUpdateWithoutRepairOrdersInput, CarUncheckedUpdateWithoutRepairOrdersInput>
    create: XOR<CarCreateWithoutRepairOrdersInput, CarUncheckedCreateWithoutRepairOrdersInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutRepairOrdersInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutRepairOrdersInput, CarUncheckedUpdateWithoutRepairOrdersInput>
  }

  export type CarUpdateWithoutRepairOrdersInput = {
    brandId?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    vin?: StringFieldUpdateOperationsInput | string
    engineType?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    pts?: StringFieldUpdateOperationsInput | string
    sts?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCarsNestedInput
  }

  export type CarUncheckedUpdateWithoutRepairOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    brandId?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    vin?: StringFieldUpdateOperationsInput | string
    engineType?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    pts?: StringFieldUpdateOperationsInput | string
    sts?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutOrdersUserInput = {
    update: XOR<UserUpdateWithoutOrdersUserInput, UserUncheckedUpdateWithoutOrdersUserInput>
    create: XOR<UserCreateWithoutOrdersUserInput, UserUncheckedCreateWithoutOrdersUserInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersUserInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersUserInput, UserUncheckedUpdateWithoutOrdersUserInput>
  }

  export type UserUpdateWithoutOrdersUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    region?: RegionUpdateOneRequiredWithoutUsersNestedInput
    cars?: CarUpdateManyWithoutUserNestedInput
    ordersEmployee?: RepairOrderUpdateManyWithoutEmployeeNestedInput
    employee?: EmployeeUpdateOneWithoutUserNestedInput
    userRoles?: UserRoleUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    regionId?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    cars?: CarUncheckedUpdateManyWithoutUserNestedInput
    ordersEmployee?: RepairOrderUncheckedUpdateManyWithoutEmployeeNestedInput
    employee?: EmployeeUncheckedUpdateOneWithoutUserNestedInput
    userRoles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutOrdersEmployeeInput = {
    update: XOR<UserUpdateWithoutOrdersEmployeeInput, UserUncheckedUpdateWithoutOrdersEmployeeInput>
    create: XOR<UserCreateWithoutOrdersEmployeeInput, UserUncheckedCreateWithoutOrdersEmployeeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersEmployeeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersEmployeeInput, UserUncheckedUpdateWithoutOrdersEmployeeInput>
  }

  export type UserUpdateWithoutOrdersEmployeeInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    region?: RegionUpdateOneRequiredWithoutUsersNestedInput
    cars?: CarUpdateManyWithoutUserNestedInput
    ordersUser?: RepairOrderUpdateManyWithoutUserNestedInput
    employee?: EmployeeUpdateOneWithoutUserNestedInput
    userRoles?: UserRoleUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    regionId?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    cars?: CarUncheckedUpdateManyWithoutUserNestedInput
    ordersUser?: RepairOrderUncheckedUpdateManyWithoutUserNestedInput
    employee?: EmployeeUncheckedUpdateOneWithoutUserNestedInput
    userRoles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductionCalendarUpsertWithWhereUniqueWithoutOrdersInput = {
    where: ProductionCalendarWhereUniqueInput
    update: XOR<ProductionCalendarUpdateWithoutOrdersInput, ProductionCalendarUncheckedUpdateWithoutOrdersInput>
    create: XOR<ProductionCalendarCreateWithoutOrdersInput, ProductionCalendarUncheckedCreateWithoutOrdersInput>
  }

  export type ProductionCalendarUpdateWithWhereUniqueWithoutOrdersInput = {
    where: ProductionCalendarWhereUniqueInput
    data: XOR<ProductionCalendarUpdateWithoutOrdersInput, ProductionCalendarUncheckedUpdateWithoutOrdersInput>
  }

  export type ProductionCalendarUpdateManyWithWhereWithoutOrdersInput = {
    where: ProductionCalendarScalarWhereInput
    data: XOR<ProductionCalendarUpdateManyMutationInput, ProductionCalendarUncheckedUpdateManyWithoutOrdersInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutRepairOrderInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutRepairOrderInput, PaymentUncheckedUpdateWithoutRepairOrderInput>
    create: XOR<PaymentCreateWithoutRepairOrderInput, PaymentUncheckedCreateWithoutRepairOrderInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutRepairOrderInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutRepairOrderInput, PaymentUncheckedUpdateWithoutRepairOrderInput>
  }

  export type PaymentUpdateManyWithWhereWithoutRepairOrderInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutRepairOrderInput>
  }

  export type RepairOrderCreateWithoutPaymentsInput = {
    status: string
    materials: string
    createdAt?: Date | string
    createdBy: number
    modifiedBy: number
    car: CarCreateNestedOneWithoutRepairOrdersInput
    user: UserCreateNestedOneWithoutOrdersUserInput
    employee: UserCreateNestedOneWithoutOrdersEmployeeInput
    calendar?: ProductionCalendarCreateNestedManyWithoutOrdersInput
  }

  export type RepairOrderUncheckedCreateWithoutPaymentsInput = {
    id?: number
    carId: number
    userId: number
    employeeId: number
    status: string
    materials: string
    createdAt?: Date | string
    createdBy: number
    modifiedBy: number
    calendar?: ProductionCalendarUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type RepairOrderCreateOrConnectWithoutPaymentsInput = {
    where: RepairOrderWhereUniqueInput
    create: XOR<RepairOrderCreateWithoutPaymentsInput, RepairOrderUncheckedCreateWithoutPaymentsInput>
  }

  export type UserCreateWithoutPaymentsInput = {
    name: string
    email: string
    phone: string
    avatar?: string | null
    created: Date | string
    createdBy: number
    modified?: Date | string | null
    modifiedBy?: number | null
    region: RegionCreateNestedOneWithoutUsersInput
    cars?: CarCreateNestedManyWithoutUserInput
    ordersUser?: RepairOrderCreateNestedManyWithoutUserInput
    ordersEmployee?: RepairOrderCreateNestedManyWithoutEmployeeInput
    employee?: EmployeeCreateNestedOneWithoutUserInput
    userRoles?: UserRoleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    id?: number
    name: string
    email: string
    phone: string
    avatar?: string | null
    regionId: number
    created: Date | string
    createdBy: number
    modified?: Date | string | null
    modifiedBy?: number | null
    cars?: CarUncheckedCreateNestedManyWithoutUserInput
    ordersUser?: RepairOrderUncheckedCreateNestedManyWithoutUserInput
    ordersEmployee?: RepairOrderUncheckedCreateNestedManyWithoutEmployeeInput
    employee?: EmployeeUncheckedCreateNestedOneWithoutUserInput
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type RepairOrderUpsertWithoutPaymentsInput = {
    update: XOR<RepairOrderUpdateWithoutPaymentsInput, RepairOrderUncheckedUpdateWithoutPaymentsInput>
    create: XOR<RepairOrderCreateWithoutPaymentsInput, RepairOrderUncheckedCreateWithoutPaymentsInput>
    where?: RepairOrderWhereInput
  }

  export type RepairOrderUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: RepairOrderWhereInput
    data: XOR<RepairOrderUpdateWithoutPaymentsInput, RepairOrderUncheckedUpdateWithoutPaymentsInput>
  }

  export type RepairOrderUpdateWithoutPaymentsInput = {
    status?: StringFieldUpdateOperationsInput | string
    materials?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modifiedBy?: IntFieldUpdateOperationsInput | number
    car?: CarUpdateOneRequiredWithoutRepairOrdersNestedInput
    user?: UserUpdateOneRequiredWithoutOrdersUserNestedInput
    employee?: UserUpdateOneRequiredWithoutOrdersEmployeeNestedInput
    calendar?: ProductionCalendarUpdateManyWithoutOrdersNestedInput
  }

  export type RepairOrderUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    materials?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modifiedBy?: IntFieldUpdateOperationsInput | number
    calendar?: ProductionCalendarUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    region?: RegionUpdateOneRequiredWithoutUsersNestedInput
    cars?: CarUpdateManyWithoutUserNestedInput
    ordersUser?: RepairOrderUpdateManyWithoutUserNestedInput
    ordersEmployee?: RepairOrderUpdateManyWithoutEmployeeNestedInput
    employee?: EmployeeUpdateOneWithoutUserNestedInput
    userRoles?: UserRoleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    regionId?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    cars?: CarUncheckedUpdateManyWithoutUserNestedInput
    ordersUser?: RepairOrderUncheckedUpdateManyWithoutUserNestedInput
    ordersEmployee?: RepairOrderUncheckedUpdateManyWithoutEmployeeNestedInput
    employee?: EmployeeUncheckedUpdateOneWithoutUserNestedInput
    userRoles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CarCreateManyUserInput = {
    id?: number
    brandId: number
    model: string
    year: number
    vin: string
    engineType: string
    registrationNumber: string
    pts: string
    sts: string
    status: string
  }

  export type RepairOrderCreateManyUserInput = {
    id?: number
    carId: number
    employeeId: number
    status: string
    materials: string
    createdAt?: Date | string
    createdBy: number
    modifiedBy: number
  }

  export type RepairOrderCreateManyEmployeeInput = {
    id?: number
    carId: number
    userId: number
    status: string
    materials: string
    createdAt?: Date | string
    createdBy: number
    modifiedBy: number
  }

  export type UserRoleCreateManyUserInput = {
    roleId: number
  }

  export type PaymentCreateManyUserInput = {
    id?: number
    repairOrderId: number
    amount: Decimal | DecimalJsLike | number | string
    paymentDate?: Date | string
    paymentMethod: string
  }

  export type CarUpdateWithoutUserInput = {
    brandId?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    vin?: StringFieldUpdateOperationsInput | string
    engineType?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    pts?: StringFieldUpdateOperationsInput | string
    sts?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    repairOrders?: RepairOrderUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandId?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    vin?: StringFieldUpdateOperationsInput | string
    engineType?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    pts?: StringFieldUpdateOperationsInput | string
    sts?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    repairOrders?: RepairOrderUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandId?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    vin?: StringFieldUpdateOperationsInput | string
    engineType?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    pts?: StringFieldUpdateOperationsInput | string
    sts?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type RepairOrderUpdateWithoutUserInput = {
    status?: StringFieldUpdateOperationsInput | string
    materials?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modifiedBy?: IntFieldUpdateOperationsInput | number
    car?: CarUpdateOneRequiredWithoutRepairOrdersNestedInput
    employee?: UserUpdateOneRequiredWithoutOrdersEmployeeNestedInput
    calendar?: ProductionCalendarUpdateManyWithoutOrdersNestedInput
    payments?: PaymentUpdateManyWithoutRepairOrderNestedInput
  }

  export type RepairOrderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    materials?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modifiedBy?: IntFieldUpdateOperationsInput | number
    calendar?: ProductionCalendarUncheckedUpdateManyWithoutOrdersNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutRepairOrderNestedInput
  }

  export type RepairOrderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    materials?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modifiedBy?: IntFieldUpdateOperationsInput | number
  }

  export type RepairOrderUpdateWithoutEmployeeInput = {
    status?: StringFieldUpdateOperationsInput | string
    materials?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modifiedBy?: IntFieldUpdateOperationsInput | number
    car?: CarUpdateOneRequiredWithoutRepairOrdersNestedInput
    user?: UserUpdateOneRequiredWithoutOrdersUserNestedInput
    calendar?: ProductionCalendarUpdateManyWithoutOrdersNestedInput
    payments?: PaymentUpdateManyWithoutRepairOrderNestedInput
  }

  export type RepairOrderUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    materials?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modifiedBy?: IntFieldUpdateOperationsInput | number
    calendar?: ProductionCalendarUncheckedUpdateManyWithoutOrdersNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutRepairOrderNestedInput
  }

  export type RepairOrderUncheckedUpdateManyWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    materials?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modifiedBy?: IntFieldUpdateOperationsInput | number
  }

  export type UserRoleUpdateWithoutUserInput = {
    role?: RoleUpdateOneRequiredWithoutUserRolesNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutUserInput = {
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type UserRoleUncheckedUpdateManyWithoutUserInput = {
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentUpdateWithoutUserInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    repairOrder?: RepairOrderUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    repairOrderId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    repairOrderId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleCreateManyRoleInput = {
    userId: number
  }

  export type UserRoleUpdateWithoutRoleInput = {
    user?: UserUpdateOneRequiredWithoutUserRolesNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutRoleInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateManyRegionInput = {
    id?: number
    name: string
    email: string
    phone: string
    avatar?: string | null
    created: Date | string
    createdBy: number
    modified?: Date | string | null
    modifiedBy?: number | null
  }

  export type UserUpdateWithoutRegionInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    cars?: CarUpdateManyWithoutUserNestedInput
    ordersUser?: RepairOrderUpdateManyWithoutUserNestedInput
    ordersEmployee?: RepairOrderUpdateManyWithoutEmployeeNestedInput
    employee?: EmployeeUpdateOneWithoutUserNestedInput
    userRoles?: UserRoleUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRegionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    cars?: CarUncheckedUpdateManyWithoutUserNestedInput
    ordersUser?: RepairOrderUncheckedUpdateManyWithoutUserNestedInput
    ordersEmployee?: RepairOrderUncheckedUpdateManyWithoutEmployeeNestedInput
    employee?: EmployeeUncheckedUpdateOneWithoutUserNestedInput
    userRoles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRegionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WorkScheduleCreateManyEmployeeInput = {
    id?: number
    workDate: Date | string
    startTime: Date | string
    endTime: Date | string
    status: string
  }

  export type WorkScheduleUpdateWithoutEmployeeInput = {
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    calendar?: ProductionCalendarUpdateManyWithoutWorkScheduleNestedInput
  }

  export type WorkScheduleUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    calendar?: ProductionCalendarUncheckedUpdateManyWithoutWorkScheduleNestedInput
  }

  export type WorkScheduleUncheckedUpdateManyWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ProductionCalendarCreateManyWorkScheduleInput = {
    id?: number
    ordersId?: number | null
    workDate: Date | string
    isHoliday: boolean
  }

  export type ProductionCalendarUpdateWithoutWorkScheduleInput = {
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isHoliday?: BoolFieldUpdateOperationsInput | boolean
    orders?: RepairOrderUpdateOneWithoutCalendarNestedInput
  }

  export type ProductionCalendarUncheckedUpdateWithoutWorkScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    ordersId?: NullableIntFieldUpdateOperationsInput | number | null
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isHoliday?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductionCalendarUncheckedUpdateManyWithoutWorkScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    ordersId?: NullableIntFieldUpdateOperationsInput | number | null
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isHoliday?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RepairOrderCreateManyCarInput = {
    id?: number
    userId: number
    employeeId: number
    status: string
    materials: string
    createdAt?: Date | string
    createdBy: number
    modifiedBy: number
  }

  export type RepairOrderUpdateWithoutCarInput = {
    status?: StringFieldUpdateOperationsInput | string
    materials?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modifiedBy?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutOrdersUserNestedInput
    employee?: UserUpdateOneRequiredWithoutOrdersEmployeeNestedInput
    calendar?: ProductionCalendarUpdateManyWithoutOrdersNestedInput
    payments?: PaymentUpdateManyWithoutRepairOrderNestedInput
  }

  export type RepairOrderUncheckedUpdateWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    materials?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modifiedBy?: IntFieldUpdateOperationsInput | number
    calendar?: ProductionCalendarUncheckedUpdateManyWithoutOrdersNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutRepairOrderNestedInput
  }

  export type RepairOrderUncheckedUpdateManyWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    materials?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    modifiedBy?: IntFieldUpdateOperationsInput | number
  }

  export type ProductionCalendarCreateManyOrdersInput = {
    id?: number
    workScheduleId: number
    workDate: Date | string
    isHoliday: boolean
  }

  export type PaymentCreateManyRepairOrderInput = {
    id?: number
    userId: number
    amount: Decimal | DecimalJsLike | number | string
    paymentDate?: Date | string
    paymentMethod: string
  }

  export type ProductionCalendarUpdateWithoutOrdersInput = {
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isHoliday?: BoolFieldUpdateOperationsInput | boolean
    workSchedule?: WorkScheduleUpdateOneRequiredWithoutCalendarNestedInput
  }

  export type ProductionCalendarUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    workScheduleId?: IntFieldUpdateOperationsInput | number
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isHoliday?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductionCalendarUncheckedUpdateManyWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    workScheduleId?: IntFieldUpdateOperationsInput | number
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isHoliday?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PaymentUpdateWithoutRepairOrderInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutRepairOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUncheckedUpdateManyWithoutRepairOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
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