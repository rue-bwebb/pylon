export default {
  Vendor: {
    sqlTable: 'vendors_vendor',
    uniqueKey: 'id',
    fields: {
      businessKey: {
        sqlColumn: 'business_key',
      },
      id: {
        sqlColumn: 'id'
      },
      isActive: {
        sqlColumn: 'is_active',
      },
      name: {
        sqlColumn: 'name',
      },
      shipsInMaxHours: {
        sqlColumn: 'ships_in_max_hours',
      },
      shipsInMinHours: {
        sqlColumn: 'ships_in_min_hours',
      },
    },
  },
};