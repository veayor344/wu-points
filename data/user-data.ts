export const userMock = {
  validUser: {
    firstName: 'Tita',
    lastName: 'Tita',
    phoneNumber: '0123',
    idNumber: '1234567890',
    cifId: '09876543210',
  },
  invalidUser: {
    firstName: 'NAVA',
    lastName: 'NAVA',
    phoneNumber: '0123',
    idNumber: 'ABAC',
    cifId: 'ABC',
  },
  EmptyFields: {
    firstName: 'Tita',
    lastName: 'Tita',
    phoneNumber: '',
    idNumber: '',
    cifId: '',
  },
};

export const bulkUploadPointsMock = {
  ValidUploadPoints: {
    program: 'Western Union Loyalty Program',
    branch: 'Head Office (010)',
    file: 'data/bulk-upload-points/upload-points-valid.xlsx',
  },
  MissingFieldsUploadPoints: {
    program: 'Western Union Loyalty Program',
    branch: 'Head Office (010)',
    file: 'data/bulk-upload-points/upload-points-missing-fields.xlsx',
  },
  InvalidFileUploadPoints: {
    program: 'Western Union Loyalty Program',
    branch: 'Head Office (010)',
    file: 'data/bulk-upload-points/upload-points-invalid-data.xlsx',
  },
  UploadPoints100Rows: {
    program: 'Western Union Loyalty Program',
    branch: 'Head Office (010)',
    file: 'data/bulk-upload-points/upload-points-100-rows.xlsx',
  },
    MaximumRowLimitExceededPoints: {
    program: 'Western Union Loyalty Program',
    branch: 'Head Office (010)',
    file: 'data/bulk-upload-points/upload-points-exceeds-rows.xlsx',
  },
};

export const bulkUploadUserMock = {
  UploadUserValid: {
    branch: 'Head Office (010)',
    file: 'data/bulk-upload-users/upload-users-valid.xlsx',
  },
  MissingFieldsUploadUser: {
    branch: 'Head Office (010)',
    file: 'data/bulk-upload-users/upload-users-missing-fields.xlsx',
  },
  InvalidFileUploadUser: {
    branch: 'Head Office (010)',
    file: 'data/bulk-upload-users/upload-users-invalid-data.xlsx',
  },
  UploadUser99Rows: {
    branch: 'Head Office (010)',
    file: 'data/bulk-upload-users/upload-users-99-rows.xlsx',
  },
  UploadUserExceedsRows: {
    branch: 'Head Office (010)',
    file: 'data/bulk-upload-users/upload-users-exceeds-rows.xlsx',
  },
};

export const pointMock = {
  valid: {
    program: 'Western Union Loyalty Program',
    service: 'Receive Money',
    branch: 'Head Office (010)',
    pointType: 'Add Points',
    amount: '1000',
    xref: '',
    description: 'Test Description'
  }
};