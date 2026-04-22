export const userMock = {
  validUser: {
    firstName: 'Tita',
    lastName: 'Tita',
    phoneNumber: '0123',
    idNumber: '1234567890',
    cifId: '0987654321',
  },
  invalidUser: {
    idNumber: '1234567',
  },
};

export const bulkUploadMock = {
  program: 'Western Union Loyalty Program',
  branch: 'Head Office (010)',
  file: 'data/bulk-upload-points/upload-points-template.xlsx',
};

export const bulkUserMock = {
  branch: 'Head Office (010)',
  file: 'data/bulk-upload-users/upload-users-template.xlsx',
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