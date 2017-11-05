import { SQLite } from 'expo'
import PouchDB from 'pouchdb-react-native'
import SQLiteAdapterFactory from 'pouchdb-adapter-react-native-sqlite'

const SQLiteAdapter = SQLiteAdapterFactory(SQLite)
PouchDB.plugin(SQLiteAdapter)
export default new PouchDB('test.db', { adapter: 'react-native-sqlite' })
