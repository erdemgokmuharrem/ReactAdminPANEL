import { test, expect } from '@playwright/test'

test.describe('Users Management', () => {
  test.beforeEach(async ({ page }) => {
    // Login before each test
    await page.goto('/login')
    await page.fill('input[type="email"]', 'admin@example.com')
    await page.fill('input[type="password"]', 'password')
    await page.click('button[type="submit"]')
    await expect(page).toHaveURL('/dashboard')
  })

  test('should display users list', async ({ page }) => {
    await page.goto('/users')
    
    await expect(page.locator('h1')).toContainText('Users')
    await expect(page.locator('table')).toBeVisible()
    await expect(page.locator('tbody tr')).toHaveCount(5) // Mock data has 5 users
  })

  test('should create new user', async ({ page }) => {
    await page.goto('/users')
    
    await page.click('text=Add User')
    await expect(page.locator('h3')).toContainText('Create User')
    
    await page.fill('input[name="name"]', 'Test User')
    await page.fill('input[name="email"]', 'test@example.com')
    await page.selectOption('select[name="role"]', 'user')
    await page.click('button[type="submit"]')
    
    await expect(page.locator('text=User created successfully')).toBeVisible()
  })

  test('should edit existing user', async ({ page }) => {
    await page.goto('/users')
    
    await page.click('tbody tr:first-child button[aria-label="Edit"]')
    await expect(page.locator('h3')).toContainText('Edit User')
    
    await page.fill('input[name="name"]', 'Updated Name')
    await page.click('button[type="submit"]')
    
    await expect(page.locator('text=User updated successfully')).toBeVisible()
  })

  test('should delete user', async ({ page }) => {
    await page.goto('/users')
    
    const initialCount = await page.locator('tbody tr').count()
    
    await page.click('tbody tr:first-child button[aria-label="Delete"]')
    await page.click('text=OK') // Confirm deletion
    
    await expect(page.locator('text=User deleted successfully')).toBeVisible()
    await expect(page.locator('tbody tr')).toHaveCount(initialCount - 1)
  })

  test('should filter users by role', async ({ page }) => {
    await page.goto('/users')
    
    await page.selectOption('select[name="role"]', 'admin')
    await page.waitForTimeout(500) // Wait for API call
    
    const adminUsers = page.locator('tbody tr')
    await expect(adminUsers).toHaveCount(1) // Only 1 admin in mock data
  })

  test('should search users', async ({ page }) => {
    await page.goto('/users')
    
    await page.fill('input[placeholder="Search users..."]', 'John')
    await page.waitForTimeout(500) // Wait for API call
    
    const searchResults = page.locator('tbody tr')
    await expect(searchResults).toHaveCount(1)
    await expect(page.locator('text=John Doe')).toBeVisible()
  })
})


