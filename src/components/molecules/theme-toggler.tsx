'use client'

import * as React from 'react'
import { useState } from 'react' // Import useState
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/atoms/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/atoms/dropdown-menu'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'

export function ThemeToggle() {
  const { setTheme } = useTheme()
  // Inside your ThemeToggle function
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleLightThemeSelection = e => {
    e.preventDefault() // Prevent default action
    e.stopPropagation() // Stop event propagation
    setIsDialogOpen(true) // Open the dialog
  }

  const confirmLightTheme = () => {
    setTheme('light')
    setIsDialogOpen(false)
  }

  const cancelLightTheme = () => {
    setIsDialogOpen(false) // Close the dialog without changing the theme
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon' className='border-l rounded-none h-14 w-14 hidden md:flex shrink-0' data-umami-event='theme-toggle'>
          <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end'>
        <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <AlertDialogTrigger asChild>
            <DropdownMenuItem onClick={handleLightThemeSelection}>Light</DropdownMenuItem>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Get ready for a flashbang! 🌟</AlertDialogTitle>
              <AlertDialogDescription>Are you sure you want to switch to the light mode? 💡💥</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setIsDialogOpen(false)}>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={confirmLightTheme}>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <DropdownMenuItem data-umami-event='theme-toggle-dark' onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem data-umami-event='theme-toggle-system' onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
