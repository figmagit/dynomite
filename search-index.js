var searchIndex={};
searchIndex["dynomite"] = {"doc":"Dynomite is set of high-level interfaces built on top of…","i":[[0,"error","dynomite","Dynomite error types",null,null],[4,"AttributeError","dynomite::error","Errors that may result of attribute value conversions",null,null],[13,"InvalidFormat","","Will be returned if an AttributeValue is present, and is…",0,null],[13,"InvalidType","","Will be returned if provided AttributeValue is not of the…",0,null],[13,"MissingField","","Will be returned if provided attributes does not included…",0,null],[12,"name","dynomite::error::AttributeError","Name of the field that is missing",1,null],[0,"retry","dynomite","Retry functionality",null,null],[3,"RetryingDynamoDb","dynomite::retry","A type which implements `DynamoDb` and retries all…",null,null],[4,"Policy","","Pre-configured retry policies for fallible operations",null,null],[13,"Limit","","Limited number of times to retry",2,null],[13,"Pause","","Limited number of times to retry with fixed pause between…",2,null],[13,"Exponential","","Limited number of times to retry with an exponential pause…",2,null],[8,"Retries","","An interface for adapting a `DynamoDb` impl to a…",null,null],[10,"with_retries","","Consumes a `DynamoDb` impl and produces a `DynamoDb` which…",3,[[["policy"]],["retryingdynamodb"]]],[11,"new","","Return a new instance with a configured retry policy",4,[[["d"],["policy"]],["self"]]],[6,"Attributes","dynomite","Type alias for map of named attribute values",null,null],[8,"DynamoDbExt","","Extension methods for DynamoDb client types",null,null],[10,"list_backups_pages","","An auto-paginating `Stream` oriented version of…",5,[[["listbackupsinput"]],[["pin",["box"]],["box",["stream"]]]]],[10,"list_tables_pages","","An auto-paginating `Stream` oriented version of…",5,[[["listtablesinput"]],[["box",["stream"]],["pin",["box"]]]]],[10,"query_pages","","An auto-paginating `Stream` oriented version of `query`",5,[[["queryinput"]],[["box",["stream"]],["pin",["box"]]]]],[10,"scan_pages","","An auto-paginating `Stream` oriented version of `scan`",5,[[["scaninput"]],[["box",["stream"]],["pin",["box"]]]]],[8,"Item","","A type which can be converted to and from a set of String…",null,null],[10,"key","","Returns the set of attributes which make up this item's…",6,[[["self"]],["attributes"]]],[8,"Attribute","","A type capable of being converted into an or from and AWS…",null,null],[10,"into_attr","","Returns a conversion into an `AttributeValue`",7,[[],["attributevalue"]]],[10,"from_attr","","Returns a fallible conversion from an `AttributeValue`",7,[[["attributevalue"]],[["attributeerror"],["result",["attributeerror"]]]]],[8,"FromAttributes","","A type capable of being produced from a set of string keys…",null,null],[10,"from_attrs","","Returns an instance of of a type resolved at runtime from…",8,[[["attributes"]],[["attributeerror"],["result",["attributeerror"]]]]],[14,"attr_map","","Creates a `HashMap<String, AttributeValue>` from a list of…",null,null],[11,"from","dynomite::error","",0,[[["t"]],["t"]]],[11,"into","","",0,[[],["u"]]],[11,"to_string","","",0,[[["self"]],["string"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"try_into","","",0,[[],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"type_id","","",0,[[["self"]],["typeid"]]],[11,"vzip","","",0,[[],["v"]]],[11,"with_retries","dynomite::retry","",4,[[["policy"]],["retryingdynamodb"]]],[11,"from","","",4,[[["t"]],["t"]]],[11,"into","","",4,[[],["u"]]],[11,"to_owned","","",4,[[["self"]],["t"]]],[11,"clone_into","","",4,[[["self"],["t"]]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"try_into","","",4,[[],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"type_id","","",4,[[["self"]],["typeid"]]],[11,"vzip","","",4,[[],["v"]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"into","","",2,[[],["u"]]],[11,"to_owned","","",2,[[["self"]],["t"]]],[11,"clone_into","","",2,[[["self"],["t"]]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"try_into","","",2,[[],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"type_id","","",2,[[["self"]],["typeid"]]],[11,"vzip","","",2,[[],["v"]]],[11,"into","","",2,[[],["retrypolicy"]]],[11,"clone","","",2,[[["self"]],["policy"]]],[11,"clone","","",4,[[["self"]],["retryingdynamodb"]]],[11,"default","","",2,[[],["self"]]],[11,"eq","dynomite::error","",0,[[["self"],["attributeerror"]],["bool"]]],[11,"ne","","",0,[[["self"],["attributeerror"]],["bool"]]],[11,"eq","dynomite::retry","",2,[[["policy"],["self"]],["bool"]]],[11,"ne","","",2,[[["policy"],["self"]],["bool"]]],[11,"fmt","dynomite::error","",0,[[["formatter"],["self"]],["result"]]],[11,"fmt","dynomite::retry","",2,[[["formatter"],["self"]],["result"]]],[11,"fmt","dynomite::error","",0,[[["formatter"],["self"]],["result"]]],[11,"batch_get_item","dynomite::retry","",4,[[["self"],["batchgetiteminput"]],[["pin",["box"]],["box",["future"]]]]],[11,"batch_write_item","","",4,[[["self"],["batchwriteiteminput"]],[["box",["future"]],["pin",["box"]]]]],[11,"create_backup","","",4,[[["self"],["createbackupinput"]],[["box",["future"]],["pin",["box"]]]]],[11,"create_global_table","","",4,[[["createglobaltableinput"],["self"]],[["box",["future"]],["pin",["box"]]]]],[11,"create_table","","",4,[[["self"],["createtableinput"]],[["box",["future"]],["pin",["box"]]]]],[11,"delete_backup","","",4,[[["deletebackupinput"],["self"]],[["box",["future"]],["pin",["box"]]]]],[11,"delete_item","","",4,[[["self"],["deleteiteminput"]],[["pin",["box"]],["box",["future"]]]]],[11,"delete_table","","",4,[[["self"],["deletetableinput"]],[["box",["future"]],["pin",["box"]]]]],[11,"describe_backup","","",4,[[["self"],["describebackupinput"]],[["box",["future"]],["pin",["box"]]]]],[11,"describe_continuous_backups","","",4,[[["describecontinuousbackupsinput"],["self"]],[["pin",["box"]],["box",["future"]]]]],[11,"describe_contributor_insights","","",4,[[["self"],["describecontributorinsightsinput"]],[["box",["future"]],["pin",["box"]]]]],[11,"describe_global_table","","",4,[[["describeglobaltableinput"],["self"]],[["pin",["box"]],["box",["future"]]]]],[11,"describe_global_table_settings","","",4,[[["self"],["describeglobaltablesettingsinput"]],[["box",["future"]],["pin",["box"]]]]],[11,"describe_limits","","",4,[[["self"]],[["pin",["box"]],["box",["future"]]]]],[11,"describe_table","","",4,[[["self"],["describetableinput"]],[["box",["future"]],["pin",["box"]]]]],[11,"describe_table_replica_auto_scaling","","",4,[[["self"],["describetablereplicaautoscalinginput"]],[["pin",["box"]],["box",["future"]]]]],[11,"describe_time_to_live","","",4,[[["describetimetoliveinput"],["self"]],[["box",["future"]],["pin",["box"]]]]],[11,"get_item","","",4,[[["self"],["getiteminput"]],[["pin",["box"]],["box",["future"]]]]],[11,"list_backups","","",4,[[["self"],["listbackupsinput"]],[["box",["future"]],["pin",["box"]]]]],[11,"list_contributor_insights","","",4,[[["self"],["listcontributorinsightsinput"]],[["box",["future"]],["pin",["box"]]]]],[11,"list_global_tables","","",4,[[["self"],["listglobaltablesinput"]],[["box",["future"]],["pin",["box"]]]]],[11,"list_tables","","",4,[[["self"],["listtablesinput"]],[["pin",["box"]],["box",["future"]]]]],[11,"list_tags_of_resource","","",4,[[["self"],["listtagsofresourceinput"]],[["pin",["box"]],["box",["future"]]]]],[11,"put_item","","",4,[[["self"],["putiteminput"]],[["box",["future"]],["pin",["box"]]]]],[11,"query","","",4,[[["queryinput"],["self"]],[["box",["future"]],["pin",["box"]]]]],[11,"restore_table_from_backup","","",4,[[["self"],["restoretablefrombackupinput"]],[["pin",["box"]],["box",["future"]]]]],[11,"restore_table_to_point_in_time","","",4,[[["self"],["restoretabletopointintimeinput"]],[["box",["future"]],["pin",["box"]]]]],[11,"scan","","",4,[[["self"],["scaninput"]],[["box",["future"]],["pin",["box"]]]]],[11,"tag_resource","","",4,[[["self"],["tagresourceinput"]],[["box",["future"]],["pin",["box"]]]]],[11,"untag_resource","","",4,[[["self"],["untagresourceinput"]],[["box",["future"]],["pin",["box"]]]]],[11,"update_continuous_backups","","",4,[[["self"],["updatecontinuousbackupsinput"]],[["pin",["box"]],["box",["future"]]]]],[11,"update_contributor_insights","","",4,[[["updatecontributorinsightsinput"],["self"]],[["pin",["box"]],["box",["future"]]]]],[11,"update_global_table","","",4,[[["self"],["updateglobaltableinput"]],[["box",["future"]],["pin",["box"]]]]],[11,"update_global_table_settings","","",4,[[["self"],["updateglobaltablesettingsinput"]],[["box",["future"]],["pin",["box"]]]]],[11,"update_item","","",4,[[["self"],["updateiteminput"]],[["pin",["box"]],["box",["future"]]]]],[11,"update_table","","",4,[[["self"],["updatetableinput"]],[["box",["future"]],["pin",["box"]]]]],[11,"update_table_replica_auto_scaling","","",4,[[["self"],["updatetablereplicaautoscalinginput"]],[["box",["future"]],["pin",["box"]]]]],[11,"update_time_to_live","","",4,[[["self"],["updatetimetoliveinput"]],[["box",["future"]],["pin",["box"]]]]],[11,"describe_endpoints","","",4,[[["self"]],[["pin",["box"]],["box",["future"]]]]],[11,"transact_get_items","","",4,[[["transactgetitemsinput"],["self"]],[["pin",["box"]],["box",["future"]]]]],[11,"transact_write_items","","",4,[[["transactwriteitemsinput"],["self"]],[["box",["future"]],["pin",["box"]]]]]],"p":[[4,"AttributeError"],[13,"MissingField"],[4,"Policy"],[8,"Retries"],[3,"RetryingDynamoDb"],[8,"DynamoDbExt"],[8,"Item"],[8,"Attribute"],[8,"FromAttributes"]]};
searchIndex["dynomite_derive"] = {"doc":"Dynomite-derive provides procedural macros for deriving…","i":[[24,"Item","dynomite_derive","Derives `dynomite::Item` type for struts with named fields",null,null],[24,"Attribute","","Derives `dynomite::Attribute` for enum types",null,null]],"p":[]};
addSearchOptions(searchIndex);initSearch(searchIndex);